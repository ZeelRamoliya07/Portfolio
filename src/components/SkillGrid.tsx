"use client";

import React, { useState } from "react";
import { SKILLS } from "../constants/data";

export default function SkillGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(SKILLS.map((s) => s.category)))];

  const filteredSkills =
    selectedCategory === "All"
      ? SKILLS
      : SKILLS.filter((s) => s.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 pb-2 border-b-4 border-black">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 text-xs font-pixel-heading border-2 border-black shadow-[2px_2px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_0px_0px_#000] transition-all cursor-pointer ${
              selectedCategory === cat
                ? "bg-[#39ff14] text-black"
                : "bg-[#23234a] text-[#f0f0f8] hover:bg-[#00e5ff] hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => {
          // Level mapping based on score
          let levelName = "NOOB";
          if (skill.score >= 90) levelName = "EXPERT";
          else if (skill.score >= 80) levelName = "ADEPT";
          else if (skill.score >= 70) levelName = "INITIATE";

          return (
            <div
              key={skill.name}
              className="border-4 border-black bg-[#171730] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform flex flex-col justify-between"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-pixel-heading text-xs text-[#00e5ff]">
                  {skill.name}
                </span>
                <span className="font-pixel-body text-[#ffff00] text-sm font-bold uppercase">
                  LVL.{skill.score} ({levelName})
                </span>
              </div>

              {/* Progress XP Bar */}
              <div className="pixel-progress-bar w-full">
                <div
                  className="pixel-progress-fill"
                  style={{ width: `${skill.score}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
