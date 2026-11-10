import { ImageResponse } from "next/og";

export const alt = "Salvation Church Uganda — A community of believers in Namulanda";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1A1917",
          padding: "70px 80px",
          fontFamily: "system-ui, sans-serif",
          color: "#FAF9F6",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: "#CC1120",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            S
          </div>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#E05A64",
            }}
          >
            Salvation Church Uganda
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "980px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: 0,
              color: "#FAF9F6",
            }}
          >
            For God. For people. For Uganda.
          </h1>
          <p
            style={{
              fontSize: "26px",
              color: "rgba(250, 249, 246, 0.75)",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Join us every Sunday at 10:00 AM in Namulanda, near Kajjansi / Entebbe Road.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: "28px",
            fontSize: "18px",
            color: "rgba(250, 249, 246, 0.6)",
          }}
        >
          <span>Namulanda, Wakiso District, Uganda</span>
          <span>salvationchurchuganda.vercel.app</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
