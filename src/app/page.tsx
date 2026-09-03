"use client";

import React, { useState } from "react";
import {
  BIO,
  EDUCATION,
  PROJECTS,
} from "../constants/data";
import PixelCard from "../components/PixelCard";
import SkillGrid from "../components/SkillGrid";

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#0f0f23] text-[#f0f0f8] p-4 md:p-8 flex flex-col items-center">
      {/* Top Banner / Retro Header */}
      <header className="w-full max-w-6xl border-4 border-black bg-[#171730] p-4 mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-[#39ff14] border-4 border-black flex items-center justify-center font-pixel-heading text-black text-2xl font-bold select-none shrink-0 shadow-[2px_2px_0px_0px_#000]">
            ZR
          </div>
          <div>
            <h1 className="font-pixel-heading text-sm md:text-lg text-[#39ff14] neon-glow">
              {BIO.name.toUpperCase()}
            </h1>
            <p className="text-sm font-mono text-[#00e5ff] uppercase tracking-wider">
              {BIO.title} | LVL 1
            </p>
          </div>
        </div>

        {/* Stats Panel */}
        <div className="flex flex-col gap-2 w-full md:w-auto font-mono text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <span className="w-8 text-[#ff007f] font-bold">HP:</span>
            <div className="pixel-progress-bar w-40 md:w-48 bg-[#23234a]">
              <div className="h-full bg-[#ff007f] shadow-[inset_-4px_0_0_#99004d]" style={{ width: "100%" }} />
            </div>
            <span>100/100</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 text-[#00e5ff] font-bold">MP:</span>
            <div className="pixel-progress-bar w-40 md:w-48 bg-[#23234a]">
              <div className="h-full bg-[#00e5ff] shadow-[inset_-4px_0_0_#008fa3]" style={{ width: "100%" }} />
            </div>
            <span>100/100</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 text-[#ffff00] font-bold">XP:</span>
            <div className="pixel-progress-bar w-40 md:w-48 bg-[#23234a]">
              <div className="h-full bg-[#ffff00] shadow-[inset_-4px_0_0_#b3b300]" style={{ width: "20%" }} />
            </div>
            <span>2028/10000</span>
          </div>
        </div>
      </header>

      {/* Main Grid Layout */}
      <main className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Character Stats & Objective (4 cols) */}
        <section className="lg:col-span-4 space-y-8">
          {/* Avatar & RPG Stats Card */}
          <PixelCard title="Character Profile" variant="accent">
            <div className="flex flex-col items-center pb-4 border-b-2 border-dashed border-[#39ff14] mb-4">
              <div className="w-32 h-32 border-4 border-black bg-[#23234a] flex items-center justify-center p-2 mb-4 relative">
                <div className="absolute inset-0 bg-[#0f0f23] opacity-20 bg-[radial-gradient(#39ff14_1px,transparent_1px)] [background-size:8px_8px]" />
                <svg className="w-24 h-24 text-[#39ff14]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <p className="font-pixel-heading text-[10px] text-[#ffff00] text-center uppercase">
                GUILD: SVNIT SURAT
              </p>
            </div>

            {/* RPG Stats list */}
            <div className="space-y-3 font-mono text-base">
              <div className="flex justify-between">
                <span className="text-[#a0a0c0]">STR (Algorithms):</span>
                <span className="text-[#39ff14] font-bold">15 / 20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a0a0c0]">AGI (Python/C++):</span>
                <span className="text-[#39ff14] font-bold">16 / 20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a0a0c0]">INT (Machine Learning):</span>
                <span className="text-[#39ff14] font-bold">14 / 20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a0a0c0]">STA (HTML/CSS/JS):</span>
                <span className="text-[#39ff14] font-bold">15 / 20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a0a0c0]">LUK (JEE Rank):</span>
                <span className="text-[#ffff00] font-bold">99.35%</span>
              </div>
            </div>
          </PixelCard>

          {/* Terminal window style Career Objective */}
          <div className="border-4 border-black bg-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-[#39ff14] font-mono text-sm leading-relaxed relative overflow-hidden">
            <div className="flex justify-between items-center border-b-2 border-[#39ff14] pb-2 mb-3">
              <span className="text-xs uppercase font-pixel-heading text-white">system_terminal.sh</span>
              <div className="flex gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
              </div>
            </div>
            <p className="mb-4">
              <span className="text-white font-bold">&gt;_ cat career_objective.txt</span>
              <br />
              {BIO.careerObjective}
            </p>
            <div>
              <span className="text-white font-bold">&gt;_ ls areas_of_interest/</span>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                {BIO.areasOfInterest.map((interest) => (
                  <li key={interest} className="text-[#00e5ff]">{interest}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-[#39ff14]/30">
              <span className="text-white font-bold">&gt;_ echo $CONTACT_INFO</span>
              <div className="mt-1 space-y-1 text-xs">
                <div>Email: <a href={`mailto:${BIO.contact.email}`} className="underline hover:text-white">{BIO.contact.email}</a></div>
                <div>Phone: {BIO.contact.phone}</div>
                <div>
                  Links: <a href={BIO.contact.github} target="_blank" rel="noopener noreferrer" className="underline hover:text-white mr-2">GitHub</a>
                  <a href={BIO.contact.linkedin} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="mt-4 animate-pulse">
              <span>$ </span><span className="pixel-blink">█</span>
            </div>
          </div>
        </section>

        {/* Right Column: Main Resume Data (8 cols) */}
        <section className="lg:col-span-8 space-y-8">
          
          {/* Education Section */}
          <div className="border-4 border-black bg-[#171730] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-pixel-heading text-xs md:text-sm text-[#ffff00] mb-6 uppercase tracking-wider">
              Education History
            </h3>
            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div key={edu.degree} className="border-l-4 border-[#39ff14] pl-4 py-2 space-y-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                    <h4 className="font-pixel-heading text-xs md:text-sm text-[#00e5ff]">
                      {edu.degree}
                    </h4>
                    <span className="text-xs text-[#ffff00] font-mono shrink-0">
                      {edu.period.start} - {edu.period.end}
                    </span>
                  </div>
                  <p className="font-mono text-sm text-[#a0a0c0]">
                    {edu.institute}
                  </p>
                  <p className="text-base text-[#39ff14] font-bold">
                    Grade: {edu.grade}
                  </p>
                  <ul className="list-disc pl-5 font-mono text-sm space-y-1 text-[#f0f0f8]/80">
                    {edu.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Key Courses Subsection */}
              <div className="mt-6 pt-6 border-t-2 border-dashed border-[#23234a]">
                <h5 className="font-pixel-heading text-xs text-[#ffff00] mb-4">
                  ACADEMIC QUEST LOG (KEY COURSES)
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-sm">
                  <div className="border-2 border-black bg-[#0b0b1a] p-3 shadow-[2px_2px_0_0_#000]">
                    <span className="text-[#39ff14] font-bold uppercase block mb-2 border-b border-[#23234a] pb-1">
                      Core CS
                    </span>
                    <ul className="list-disc pl-4 space-y-1 text-[#f0f0f8]/85">
                      {BIO.keyCourses.coreCS.map((course) => (
                        <li key={course}>{course}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-2 border-black bg-[#0b0b1a] p-3 shadow-[2px_2px_0_0_#000]">
                    <span className="text-[#00e5ff] font-bold uppercase block mb-2 border-b border-[#23234a] pb-1">
                      AI & ML
                    </span>
                    <ul className="list-disc pl-4 space-y-1 text-[#f0f0f8]/85">
                      {BIO.keyCourses.aiML.map((course) => (
                        <li key={course}>{course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="border-4 border-black bg-[#171730] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-pixel-heading text-xs md:text-sm text-[#ffff00] mb-6 uppercase tracking-wider">
              Skills & Equipment Inventory
            </h3>
            <SkillGrid />
          </div>

          {/* Projects Showcase */}
          <div className="border-4 border-black bg-[#171730] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-pixel-heading text-xs md:text-sm text-[#ffff00] mb-6 uppercase tracking-wider">
              Featured Projects
            </h3>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(showAllProjects ? PROJECTS : PROJECTS.slice(0, 5)).map((proj) => (
                  <div
                    key={proj.title}
                    className="border-2 border-black bg-[#0b0b1a] p-4 flex flex-col justify-between shadow-[4px_4px_0_0_#000] hover:shadow-[4px_4px_0_0_#39ff14] transition-all"
                  >
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-2 pb-2 border-b border-[#23234a]">
                        <h4 className="font-pixel-heading text-xs text-[#00e5ff] tracking-wide">
                          {proj.title}
                        </h4>
                        <span className="text-[9px] font-mono text-[#a0a0c0] text-right shrink-0">
                          {proj.role}
                        </span>
                      </div>
                      <p className="font-mono text-sm text-[#f0f0f8]/90 mb-4">
                        {proj.desc}
                      </p>
                      <ul className="list-disc pl-4 font-mono text-xs text-[#a0a0c0] mb-4 space-y-1">
                        {proj.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tech.map((t) => (
                          <span
                            key={t}
                            className="px-1.5 py-0.5 text-[8px] font-pixel-heading bg-[#23234a] text-[#ffff00] border border-black"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex gap-2 items-center">
                        {proj.live ? (
                          <a
                            href={proj.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pixel-btn text-[9px] py-1 px-2.5 bg-[#39ff14]"
                          >
                            DEMO
                          </a>
                        ) : null}
                        {proj.repo ? (
                          <a
                            href={proj.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pixel-btn pixel-btn-secondary text-[9px] py-1 px-2.5 bg-[#ff007f]"
                          >
                            GITHUB
                          </a>
                        ) : null}
                        {!proj.live && !proj.repo ? (
                          <span className="text-[9px] font-pixel-heading px-2 py-1 bg-[#1d1d3b] text-[#39ff14] border border-[#39ff14]/50">
                            ONGOING RESEARCH
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {PROJECTS.length > 5 && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setShowAllProjects(!showAllProjects)}
                    className="pixel-btn"
                  >
                    {showAllProjects ? "SHOW LESS PROJECTS" : "SHOW MORE PROJECTS"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Arcade Cabinet bottom */}
      <footer className="w-full max-w-6xl mt-12 border-4 border-black bg-[#171730] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-sm">
        <div className="text-center md:text-left">
          <p className="font-pixel-heading text-xs text-[#39ff14] mb-2 neon-glow">
            CONTACT DETAILS
          </p>
          <p className="text-[#a0a0c0] text-xs">
            © {new Date().getFullYear()} {BIO.name}. All rights reserved.
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col md:flex-row gap-6 items-center font-mono text-xs md:text-sm">
          <div>
            <span className="text-[#00e5ff] font-bold">Email:</span>{" "}
            <a href={`mailto:${BIO.contact.email}`} className="underline text-[#39ff14] hover:text-white">
              {BIO.contact.email}
            </a>
          </div>
          <div>
            <span className="text-[#00e5ff] font-bold">Phone:</span>{" "}
            <span className="text-[#ffff00]">{BIO.contact.phone}</span>
          </div>
          <div className="flex gap-3">
            <a href={BIO.contact.github} target="_blank" rel="noopener noreferrer" className="pixel-btn text-[9px] py-1 px-2.5">
              GITHUB
            </a>
            <a href={BIO.contact.linkedin} target="_blank" rel="noopener noreferrer" className="pixel-btn pixel-btn-secondary text-[9px] py-1 px-2.5">
              LINKEDIN
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
