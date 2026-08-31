"use client";

import React from "react";

interface RetroTabsProps<T extends string> {
  tabs: readonly T[];
  activeTab: T;
  onChange: (tab: T) => void;
  variant?: "primary" | "secondary";
}

export default function RetroTabs<T extends string>({
  tabs,
  activeTab,
  onChange,
  variant = "primary",
}: RetroTabsProps<T>) {
  return (
    <div className="flex flex-wrap border-b-4 border-black mb-6">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`px-4 py-2 text-xs md:text-sm font-pixel-heading border-t-4 border-x-4 border-black mr-2 -mb-[4px] relative z-10 transition-all cursor-pointer ${
              isActive
                ? "bg-[#171730] text-[#39ff14] border-b-4 border-b-[#171730]"
                : "bg-[#0b0b1a] text-[#a0a0c0] hover:bg-[#23234a] hover:text-[#00e5ff] border-b-4 border-b-black"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
