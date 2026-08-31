"use client";

import React, { useState, useEffect } from "react";

interface CRTWrapperProps {
  children: React.ReactNode;
}

export default function CRTWrapper({ children }: CRTWrapperProps) {
  const [crtActive, setCrtActive] = useState<boolean>(true);

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
          className={`pixel-btn ${crtActive ? "pixel-btn-secondary" : ""}`}
          title="Toggle CRT Screen Scanlines"
        >
          CRT SCREEN: {crtActive ? "ON" : "OFF"}
        </button>
      </div>
      {children}
    </div>
  );
}
