import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "twonutris — comida saludable a domicilio en Ecuador";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// logo.png is 4093x2895 with built-in padding around the wordmark.
const LOGO_HEIGHT = 600;
const LOGO_WIDTH = Math.round((LOGO_HEIGHT * 4093) / 2895);

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/icons/logo.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFBE4",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={LOGO_WIDTH} height={LOGO_HEIGHT} alt="" />
      </div>
    ),
    { ...size },
  );
}
