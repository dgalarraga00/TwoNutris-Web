"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Loader2, AlertCircle } from "lucide-react";
import { detectZoneByCoords, Zone } from "@/utils/delivery-zones";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onPlaceSelect: (address: string, zone: Zone, lat: number, lng: number) => void;
}

const QUITO_CENTER = { lat: -0.2295, lng: -78.5243 };

function loadGoogleMapsScript(apiKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.google?.maps?.places) { resolve(); return; }

    const existing = document.getElementById("google-maps-script");
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", reject);
      return;
    }

    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&language=es`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export function PlacesAddressInput({ value, onChange, onPlaceSelect }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [pinZone, setPinZone] = useState<Zone>("URBAN");

  const geocoderRef = useRef<google.maps.Geocoder | null>(null);

  function reverseGeocode(lat: number, lng: number) {
    if (!geocoderRef.current) return;
    geocoderRef.current.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === "OK" && results?.[0]) {
        const address = results[0].formatted_address;
        onChange(address);
        const zone = detectZoneByCoords(lat, lng);
        setPinZone(zone);
        onPlaceSelect(address, zone, lat, lng);
      }
    });
  }

  function updateFromLatLng(lat: number, lng: number, address?: string) {
    const zone = detectZoneByCoords(lat, lng);
    setPinZone(zone);
    onPlaceSelect(address ?? value, zone, lat, lng);
  }

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      console.warn("[Places] NEXT_PUBLIC_GOOGLE_MAPS_API_KEY no configurada");
      setLoading(false);
      setError(true);
      return;
    }

    loadGoogleMapsScript(apiKey)
      .then(() => {
        // ── Mapa ──────────────────────────────────────────────
        if (!mapRef.current) return;

        geocoderRef.current = new google.maps.Geocoder();

        const map = new google.maps.Map(mapRef.current, {
          center: QUITO_CENTER,
          zoom: 13,
          disableDefaultUI: true,
          zoomControl: true,
          clickableIcons: false,
          styles: [
            { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
          ],
        });

        const marker = new google.maps.Marker({
          map,
          position: QUITO_CENTER,
          draggable: true,
          animation: google.maps.Animation.DROP,
          title: "Arrastrá para ajustar tu ubicación",
        });

        // Al arrastrar el pin → geocoding inverso + recalcula zona
        marker.addListener("dragend", () => {
          const pos = marker.getPosition();
          if (!pos) return;
          reverseGeocode(pos.lat(), pos.lng());
        });

        // Al hacer click en el mapa → mueve el pin + geocoding inverso
        map.addListener("click", (e: google.maps.MapMouseEvent) => {
          if (!e.latLng) return;
          marker.setPosition(e.latLng);
          reverseGeocode(e.latLng.lat(), e.latLng.lng());
        });

        googleMapRef.current = map;
        markerRef.current = marker;
        setMapReady(true);

        // ── Autocomplete ─────────────────────────────────────
        if (!inputRef.current) return;

        const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
          componentRestrictions: { country: "ec" },
          fields: ["address_components", "formatted_address", "geometry"],
          types: ["address"],
        });

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          if (!place.geometry?.location || !place.formatted_address) return;

          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          const latlng = { lat, lng };

          // Mueve mapa y pin a la dirección seleccionada
          map.setCenter(latlng);
          map.setZoom(17);
          marker.setPosition(latlng);
          marker.setAnimation(google.maps.Animation.DROP);

          updateFromLatLng(lat, lng, place.formatted_address);
        });

        setLoading(false);
      })
      .catch((e) => {
        console.error("[Places]", e);
        setLoading(false);
        setError(true);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {/* Input con autocomplete */}
      <div className="relative">
        {loading && (
          <Loader2
            size={14}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 animate-spin pointer-events-none"
          />
        )}
        {!loading && (
          <MapPin
            size={14}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        )}
        <input
          ref={inputRef}
          type="text"
          required
          placeholder={error ? "Ingresá tu dirección manualmente" : "Av. Amazonas 123, Quito..."}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-poppins text-gray-900 placeholder-gray-400 focus:outline-none focus:border-leaf transition-colors"
        />
      </div>

      {/* Mapa */}
      {!error && (
        <div className="relative rounded-2xl overflow-hidden border border-gray-200">
          <div ref={mapRef} className="w-full h-52" />

          {/* Overlay de carga */}
          {loading && (
            <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
              <Loader2 size={20} className="text-gray-400 animate-spin" />
            </div>
          )}

          {/* Badge de zona detectada */}
          {mapReady && (
            <div
              className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold font-poppins shadow-sm ${
                pinZone === "URBAN"
                  ? "bg-leaf text-cream"
                  : "bg-amber text-leaf"
              }`}
            >
              <MapPin size={11} />
              {pinZone === "URBAN" ? "Zona urbana · $3.00" : "Zona periférica · $4.00"}
            </div>
          )}

          {/* Instrucción */}
          {mapReady && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[11px] font-poppins text-gray-600 shadow-sm whitespace-nowrap">
              Arrastrá el pin o hacé click para ajustar
            </div>
          )}
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 text-[11px] font-poppins text-amber-700 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2">
          <AlertCircle size={13} />
          Autocompletado no disponible — ingresá la dirección completa y seleccioná la zona manualmente.
        </div>
      )}
    </div>
  );
}
