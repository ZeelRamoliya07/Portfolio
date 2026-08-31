import React from "react";

interface PixelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  variant?: "default" | "accent" | "danger" | "yellow";
  pixelHeader?: React.ReactNode;
}

export default function PixelCard({
  title,
  variant = "default",
  pixelHeader,
  children,
  className = "",
  ...props
}: PixelCardProps) {
  let shadowClass = "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]";
  if (variant === "accent") {
    shadowClass = "shadow-[6px_6px_0px_0px_#39ff14]";
  } else if (variant === "danger") {
    shadowClass = "shadow-[6px_6px_0px_0px_#ff007f]";
  } else if (variant === "yellow") {
    shadowClass = "shadow-[6px_6px_0px_0px_#ffff00]";
  }

  return (
    <div
      className={`border-4 border-black bg-[#171730] p-6 transition-transform hover:-translate-y-1 ${shadowClass} ${className}`}
      {...props}
    >
      {title && (
        <div className="border-b-4 border-black pb-3 mb-4 flex items-center justify-between">
          <h3 className="font-pixel-heading text-xs md:text-sm text-[#00e5ff] uppercase tracking-wider">
            {title}
          </h3>
          {pixelHeader}
        </div>
      )}
      <div className="font-pixel-body text-lg md:text-xl leading-relaxed text-[#f0f0f8]">
        {children}
      </div>
    </div>
  );
}
