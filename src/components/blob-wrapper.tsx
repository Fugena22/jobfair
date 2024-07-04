import { HTMLAttributes, ReactNode } from "react";

function Blob(props: HTMLAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 800 800"
      {...props}
    >
      <defs>
        <filter
          id="bbblurry-filter"
          x="-100%"
          y="-100%"
          width="400%"
          height="400%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            stdDeviation={130}
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            edgeMode="none"
            result="blur"
          />
        </filter>
      </defs>
      <g filter="url(#bbblurry-filter)">
        <ellipse
          rx="181.5"
          ry={180}
          cx="400.9455946677642"
          cy="410.17729051200513"
          fill="hsl(34, 100%, 83%)"
        />
      </g>
    </svg>
  );
}

export default function BlobWrapper({
  children,
  blobStyle,
}: {
  children: ReactNode;
  blobStyle: HTMLAttributes<SVGElement>["style"];
}) {
  return (
    <div className="relative">
      <Blob
        style={{
          height: 1000,
          aspectRatio: "1 / 1",
          position: "absolute",
          zIndex: "-1",
          ...blobStyle,
        }}
      />
      {children}
    </div>
  );
}
