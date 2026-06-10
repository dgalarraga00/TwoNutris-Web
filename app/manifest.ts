import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "twonutris",
    short_name: "twonutris",
    description:
      "Comida saludable a domicilio en Guayaquil — planes y menús semanales.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFBE4",
    theme_color: "#144400",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
