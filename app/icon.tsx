import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#144400",
          color: "#FFB000",
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: "-1px",
        }}
      >
        tn
      </div>
    ),
    { ...size },
  );
}
