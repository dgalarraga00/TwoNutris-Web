import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "twonutris — comida saludable a domicilio en Guayaquil";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#FFFBE4",
          padding: "96px",
          position: "relative",
        }}
      >
        {/* Acento amber arriba */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "16px",
            backgroundColor: "#FFB000",
          }}
        />

        {/* Acento decorativo */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            right: "96px",
            width: "120px",
            height: "120px",
            borderRadius: "9999px",
            backgroundColor: "#FFB000",
            opacity: 0.85,
            display: "flex",
          }}
        />

        {/* Marca */}
        <div
          style={{
            display: "flex",
            fontSize: 180,
            fontWeight: 900,
            color: "#144400",
            letterSpacing: "-6px",
            lineHeight: 1,
          }}
        >
          twonutris
        </div>

        {/* Slogan */}
        <div
          style={{
            display: "flex",
            marginTop: "32px",
            fontSize: 44,
            fontWeight: 600,
            color: "#144400",
            opacity: 0.9,
            lineHeight: 1.2,
          }}
        >
          Comida saludable a domicilio en Guayaquil
        </div>

        {/* Pie con acento */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginTop: "56px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              backgroundColor: "#FFB000",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              color: "#144400",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Planes y menús semanales
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
