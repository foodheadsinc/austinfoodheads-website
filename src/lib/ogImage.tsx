import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";
export const ogImageAlt = "Austin Food Heads";

export async function renderOgImage() {
  const logoData = await readFile(
    join(process.cwd(), "public/images/logo.png"),
    "base64"
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 64,
          background: "#FFEED6",
          padding: "0 80px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt=""
          width={430}
          height={600}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 560,
          }}
        >
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: "#F06400",
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Austin, TX
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#191439",
              lineHeight: 1.1,
            }}
          >
            The best things to do, eat & drink in Austin
          </div>
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
