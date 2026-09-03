"use client";

import React, { useState, useEffect } from "react";

interface CRTWrapperProps {
  children: React.ReactNode;
}

export default function CRTWrapper({ children }: CRTWrapperProps) {
  const [crtActive, setCrtActive] = useState<boolean>(false);

  useEffect(() => {
    // We can also toggle class on the html/body element
    if (crtActive) {
      document.body.classList.add("crt");
    } else {
      document.body.classList.remove("crt");
    }
    return () => {
      document.body.classList.remove("crt");
    };
  }, [crtActive]);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Floating control widget */}
      <div className="fixed bottom-4 right-4 z-50 pointer-events-auto">
        <button
          onClick={() => setCrtActive(!crtActive)}
          className={`pixel-btn flex items-center justify-center ${crtActive ? "pixel-btn-secondary" : ""}`}
          title="Toggle CRT Screen Scanlines"
        >
          <span className="md:hidden">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
              <polyline points="17 2 12 7 7 2" />
            </svg>
          </span>
          <span className="hidden md:inline">CRT SCREEN: {crtActive ? "ON" : "OFF"}</span>
        </button>
      </div>
      {children}
    </div>
  );
}
