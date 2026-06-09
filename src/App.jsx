import React, { useRef } from "react";
import myPhoto from "./assets/my-photo.png";
import {
  SiAngular,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiLaravel,
  SiVuedotjs,
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiSwagger,
  SiGit,
  SiSpringboot,
} from "react-icons/si";

export default function App() {
  // Setup Refs untuk fungsi klik smooth scroll navigasi
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f2] text-black font-['Plus_Jakarta_Sans',sans-serif] antialiased pb-[60px] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght=600;700;800;900&display=swap');
      `}</style>

      {/* PORT NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-[60px] py-5 bg-[#faf8f2] border-b-4 border-black sticky top-0 z-50">
        <div
          className="text-2xl font-black tracking-tight uppercase cursor-pointer select-none"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          MAI.
        </div>
        <div className="hidden md:flex gap-7">
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="text-sm font-extrabold tracking-wide uppercase hover:text-[#ff007f] hover:scale-110 transition-all cursor-pointer bg-transparent border-none"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(skillsRef)}
            className="text-sm font-extrabold tracking-wide uppercase hover:text-[#ff007f] hover:scale-110 transition-all cursor-pointer bg-transparent border-none"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection(projectsRef)}
            className="text-sm font-extrabold tracking-wide uppercase hover:text-[#ff007f] hover:scale-110 transition-all cursor-pointer bg-transparent border-none"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection(experienceRef)}
            className="text-sm font-extrabold tracking-wide uppercase hover:text-[#ff007f] hover:scale-110 transition-all cursor-pointer bg-transparent border-none"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="text-sm font-extrabold tracking-wide uppercase hover:text-[#ff007f] hover:scale-110 transition-all cursor-pointer bg-transparent border-none"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* MAIN BENTO LAYOUT CONTAINER */}
      <div className="max-w-[1100px] mx-auto py-10 px-5 flex flex-col gap-10">
        {/* HERO SECTION */}
        <section
          ref={aboutRef}
          className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] items-center gap-10 p-10 bg-[#ffd60a] border-4 border-black rounded-none shadow-[12px_12px_0px_#000000]"
        >
          <div className="text-center md:text-left">
            <div className="inline-block bg-black text-white text-[13px] font-extrabold px-4 py-1.5 rounded-none mb-4 tracking-wider uppercase">
              Software Developer
            </div>
            <h1 className="text-4xl md:text-[50px] font-black leading-[1.05] mb-4 tracking-tight">
              Hi, I'm{" "}
              <span className="bg-[#ff007f] text-white px-3 py-0.5 inline-block transform -rotate-1">
                Mai.
              </span>
            </h1>
            <p className="text-base leading-relaxed text-black max-w-[550px] mx-auto md:mx-0 mb-7 font-bold">
              I build web applications across the stack, from Angular frontends
              to Laravel and Spring Boot backends. I care about clean code, good
              structure, and systems that actually work.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <button
                onClick={() => scrollToSection(projectsRef)}
                className="bg-[#ff007f] text-white text-sm font-black uppercase px-8 py-4 border-3 border-black rounded-none cursor-pointer shadow-[4px_4px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none hover:bg-[#ccff00] hover:text-black transition-all"
              >
                View Projects
              </button>
              {/* <a 
                href="#"
                className="bg-white text-black text-sm font-black uppercase px-8 py-4 border-3 border-black rounded-none cursor-pointer shadow-[4px_4px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none hover:bg-black hover:text-white transition-all no-underline inline-block"
              >
                Download CV
              </a> */}
            </div>
          </div>

          <div className="justify-self-center relative">
            <div className="w-[250px] h-[280px] rounded-none overflow-hidden border-4 border-black bg-[#ff007f] shadow-[8px_8px_0px_#000000] transform rotate-3 hover:rotate-0 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#000000] transition-all flex items-center justify-center text-6xl select-none">
              <img src={myPhoto} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* BENTO ROW 1: SKILLS & PROJECTS (Asal Balik) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* SKILLS BLOCK */}
          <section
            ref={skillsRef}
            className="bg-white border-4 border-black rounded-none p-9 flex flex-col shadow-[10px_10px_0px_#000000]"
          >
            <div className="text-xs font-black tracking-wider text-[#ff007f] uppercase mb-1.5">
              What I work with
            </div>
            <h2 className="text-3xl font-black text-black mb-6 tracking-tight uppercase">
              Skills
            </h2>

            <div className="grid grid-cols-2 gap-3.5">
              {[
                {
                  name: "Angular",
                  icon: <SiAngular className="w-7 h-7 text-[#DD0031]" />,
                },
                {
                  name: "React",
                  icon: <SiReact className="w-7 h-7 text-[#61dafb]" />,
                },
                {
                  name: "JavaScript",
                  icon: <SiJavascript className="w-7 h-7 text-[#F7DF1E]" />,
                },
                {
                  name: "TypeScript",
                  icon: <SiTypescript className="w-7 h-7 text-[#3178C6]" />,
                },
                {
                  name: "Laravel",
                  icon: <SiLaravel className="w-7 h-7 text-[#FF2D20]" />,
                },
                {
                  name: "Vue.js",
                  icon: <SiVuedotjs className="w-7 h-7 text-[#41B883]" />,
                },
                {
                  name: ".NET",
                  icon: <SiDotnet className="w-7 h-7 text-[#512BD4]" />,
                },
                {
                  name: "PostgreSQL",
                  icon: <SiPostgresql className="w-7 h-7 text-[#336791]" />,
                },
                {
                  name: "MySQL",
                  icon: <SiMysql className="w-7 h-7 text-[#00758F]" />,
                },
                {
                  name: "Swagger",
                  icon: <SiSwagger className="w-7 h-7 text-[#85EA2D]" />,
                },
                {
                  name: "Git",
                  icon: <SiGit className="w-7 h-7 text-[#F05032]" />,
                },
                {
                  name: "Spring Boot",
                  icon: <SiSpringboot className="w-7 h-7 text-green-600" />,
                },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-white border-3 border-black rounded-none p-3.5 flex items-center gap-3 shadow-[4px_4px_0px_#000000] hover:bg-[#ccff00] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all group"
                >
                  <div className="flex items-center select-none shrink-0">
                    {skill.icon}
                  </div>
                  <div className="text-[14px] font-black text-black uppercase tracking-tight">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS BLOCK */}
          <section
            ref={projectsRef}
            className="bg-white border-4 border-black rounded-none p-9 flex flex-col shadow-[10px_10px_0px_#000000]"
          >
            <div className="text-xs font-black tracking-wider text-[#ff007f] uppercase mb-1.5">
              Featured Work
            </div>
            <h2 className="text-3xl font-black text-black mb-6 tracking-tight uppercase">
              Projects
            </h2>

            <div className="flex flex-col gap-4">
              <div className="bg-white border-3 border-black rounded-none p-6 shadow-[4px_4px_0px_#000000] hover:bg-[#ff007f] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all group">
                <div className="text-xs font-black text-[#ff007f] uppercase mb-1.5 group-hover:text-white transition-colors">
                  Backend API
                </div>
                <h3 className="text-xl font-black text-black mb-2 uppercase group-hover:text-white transition-colors flex items-center gap-2">
                  Task Management API
                  {/* <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="w-4 h-4 text-black group-hover:text-white transition-colors"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg> */}
                </h3>
                <p className="text-xs text-[#333333] font-semibold leading-relaxed mb-4 group-hover:text-white transition-colors">
                  A personal project built while exploring C# and ASP.NET Core,
                  implementing a simple task management API with CRUD
                  operations, pagination, and filtering.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["ASP.NET Core", "C#", "PostgreSQL", "EF Core"].map(
                    (tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-extrabold bg-black text-white px-3 py-1 border-2 border-black group-hover:bg-white group-hover:text-black transition-colors"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="bg-white border-3 border-black rounded-none p-6 shadow-[4px_4px_0px_#000000] hover:bg-[#ff007f] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all group">
                <div className="text-xs font-black text-[#ff007f] uppercase mb-1.5 group-hover:text-white transition-colors">
                  Security Research
                </div>
                <h3 className="text-xl font-black text-black mb-2 uppercase group-hover:text-white transition-colors flex items-center gap-2">
                  SQL Injection on Vulnerable Web
                  {/* <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="w-4 h-4 text-black group-hover:text-white transition-colors"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg> */}
                </h3>
                <p className="text-xs text-[#333333] font-semibold leading-relaxed mb-4 group-hover:text-white transition-colors">
                  Final year project exploring SQLi attack vectors in a
                  controlled environment in simulated auth bypass and data
                  extraction, then documented mitigation strategies for secure
                  coding.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["PHP", "HTML", "CSS", "SQL"].map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-extrabold bg-black text-white px-3 py-1 border-2 border-black group-hover:bg-white group-hover:text-black transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* BENTO ROW 2: EXPERIENCE & CONTACT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* EXPERIENCE BLOCK */}
          <section
            ref={experienceRef}
            className="bg-white border-4 border-black rounded-none p-9 flex flex-col shadow-[10px_10px_0px_#000000] overflow-y-auto max-h-[520px]"
          >
            <div className="text-xs font-black tracking-wider text-[#ff007f] uppercase mb-1.5">
              My Journey
            </div>
            <h2 className="text-3xl font-black text-black mb-6 tracking-tight uppercase">
              Experience
            </h2>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4 p-5 bg-white border-3 border-black shadow-[4px_4px_0px_#000000]">
                <div className="w-3 h-3 bg-black border-3 border-black rounded-none mt-1.5 shrink-0" />
                <div>
                  <h3 className="text-base font-black text-black uppercase leading-tight">
                    Software Developer
                  </h3>
                  <div className="text-xs font-black text-[#ff007f] mb-1">
                    HeiTech Padu Berhad
                  </div>
                  <div className="text-[11px] font-bold text-[#666666]">
                    Sep 2025 – Present
                  </div>
                  <p className="text-xs text-[#222222] font-semibold leading-relaxed mt-2">
                    Working on an enterprise system revamp for a government
                    agency using Angular frontend modules, developing Spring
                    Boot backend logic, and collaborating with system analysts
                    to translate business requirements into working features.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-white border-3 border-black shadow-[4px_4px_0px_#000000]">
                <div className="w-3 h-3 bg-black border-3 border-black rounded-none mt-1.5 shrink-0" />
                <div>
                  <h3 className="text-base font-black text-black uppercase leading-tight">
                    Automotive Market Researcher
                  </h3>
                  <div className="text-xs font-black text-[#ff007f] mb-1">
                    Carsome Sdn Bhd
                  </div>
                  <div className="text-[11px] font-bold text-[#666666]">
                    May 2025 – Sep 2025
                  </div>
                  <p className="text-xs text-[#222222] font-semibold leading-relaxed mt-2">
                    Managed 8,000+ records of vehicle data and collaborating
                    with data scientists to optimize the digital library
                    pipeline.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-white border-3 border-black shadow-[4px_4px_0px_#000000]">
                <div className="w-3 h-3 bg-black border-3 border-black rounded-none mt-1.5 shrink-0" />
                <div>
                  <h3 className="text-base font-black text-black uppercase leading-tight">
                    Junior Software Developer
                  </h3>
                  <div className="text-xs font-black text-[#ff007f] mb-1">
                    Delhub Digital Sdn Bhd
                  </div>
                  <div className="text-[11px] font-bold text-[#666666]">
                    Jul 2024 – Dec 2024
                  </div>
                  <p className="text-xs text-[#222222] font-semibold leading-relaxed mt-2">
                    Built backend features for a wholesale ordering system using
                    Laravel, developed Vue.js frontend components, and worked
                    closely with QA on functional testing and pre-deployment
                    validation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-white border-3 border-black shadow-[4px_4px_0px_#000000]">
                <div className="w-3 h-3 bg-black border-3 border-black rounded-none mt-1.5 shrink-0" />
                <div>
                  <h3 className="text-base font-black text-black uppercase leading-tight">
                    Website Developer
                  </h3>
                  <div className="text-xs font-black text-[#ff007f] mb-1">
                    Delhub Digital Sdn Bhd
                  </div>
                  <div className="text-[11px] font-bold text-[#666666]">
                    Mar 2024 – June 2024
                  </div>
                  <p className="text-xs text-[#222222] font-semibold leading-relaxed mt-2">
                    Developed and maintained company websites using HTML, CSS,
                    and JavaScript.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT CTA BOX */}
          <section
            ref={contactRef}
            className="bg-[#ccff00] border-4 border-black rounded-none p-10 text-center flex flex-col justify-center items-center h-full min-h-[350px] box-border shadow-[10px_10px_0px_#000000]"
          >
            <h3 className="text-3xl font-black text-black mb-2.5 tracking-tight uppercase">
              Get in touch
            </h3>
            <p className="text-sm font-bold text-black mb-6 max-w-[320px] leading-relaxed">
              Open for full-stack opportunities, backend systems, or frontend
              dashboard architecture discussions.
            </p>
            <div className="flex flex-col gap-3 w-full max-w-[240px]">
              <a
                href="mailto:myzatul012@gmail.com"
                className="flex items-center justify-center gap-3 text-sm font-black uppercase text-white bg-black p-3.5 border-3 border-black shadow-[4px_4px_0px_#ff007f] hover:bg-[#ff007f] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all no-underline"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Email
              </a>
              <a
                href="https://linkedin.com/in/maizatul-izzah"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 text-sm font-black uppercase text-white bg-black p-3.5 border-3 border-black shadow-[4px_4px_0px_#ff007f] hover:bg-[#ff007f] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all no-underline"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </section>
        </div>

        {/* FOOTER */}
        <footer className="text-center pt-10 pb-5 text-xs font-black text-black uppercase tracking-widest">
          © 2026 MAI . Built with React & Tailwind
        </footer>
      </div>
    </div>
  );
}
