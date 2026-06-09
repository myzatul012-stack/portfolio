import React, { useRef } from "react";
import myPhoto from "./assets/my-photo.png";

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
          className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] items-center gap-10 p-10 bg-[#00f0ff] border-4 border-black rounded-none shadow-[12px_12px_0px_#000000]"
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
              I build and enhance robust web applications using PHP (Laravel),
              Angular, and Vue.js. Experienced in RESTful API integration,
              enterprise workflows, and database management.
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
            <div className="w-[250px] h-[280px] rounded-none overflow-hidden border-4 border-black bg-[#ccff00] shadow-[8px_8px_0px_#000000] transform rotate-3 hover:rotate-0 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#000000] transition-all flex items-center justify-center text-6xl select-none">
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
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-7 h-7">
                      <path
                        fill="#DD0031"
                        d="M12 2L2 5.5l1.5 12.5L12 22l8.5-4 1.5-12.5L12 2z"
                      />
                      <path fill="#C3002F" d="M12 2v20l8.5-4 1.5-12.5L12 2z" />
                      <path
                        fill="#FFF"
                        d="M12 4.6l5 10.4H7l5-10.4zm0 2.2L9.3 12.8h5.4L12 6.8z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "React",
                  icon: (
                    <svg
                      viewBox="-11.5 -10.23174 23 20.46348"
                      className="w-7 h-7"
                    >
                      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                      <g stroke="#61dafb" strokeWidth="1" fill="none">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                      </g>
                    </svg>
                  ),
                },
                {
                  name: "JavaScript",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-7 h-7">
                      <path fill="#F7DF1E" d="M0 0h24v24H0z" />
                      <path
                        fill="#000"
                        d="M13.314 14.502c0 1.252-.647 1.966-1.85 1.966-1.045 0-1.65-.544-1.782-1.29l-1.55.932c.266 1.463 1.373 2.34 3.332 2.34 2.264 0 3.414-1.272 3.414-3.32v-5.83H13.31v1.295h1.564v5.007zm5.72 1.523c-.183-.7-.643-1.12-1.408-1.12-.72 0-1.168.4-1.168.992 0 .58.406.848 1.312 1.185 1.332.486 2.223.997 2.223 2.476 0 1.463-1.127 2.443-2.93 2.443-1.91 0-2.86-.975-3.098-2.292l1.53-.884c.21 1.05.73 1.6 1.56 1.6.782 0 1.284-.374 1.284-1.034 0-.57-.428-.82-1.33-1.2-.132-.055-2.18-.87-2.18-2.42 0-1.373 1.12-2.27 2.78-2.27 1.68 0 2.57.79 2.8 1.913l-1.56.92z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "TypeScript",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-7 h-7">
                      <path fill="#3178C6" d="M0 0h24v24H0z" />
                      <path
                        fill="#FFF"
                        d="M13.4 15.6c.1-.4.3-.7.6-.9.4-.2.9-.3 1.5-.3.6 0 1.1.1 1.4.3.3.2.5.5.5.9 0 .3-.1.5-.3.7-.2.2-.5.3-1 .5-.6.2-1.1.4-1.4.6-.3.2-.4.5-.4.9 0 .4.1.7.4.9.3.2.7.3 1.2.3.6 0 1.1-.1 1.5-.4.4-.3.5-.8.6-1.4h1.3c0 1-.3 1.7-1 2.2-.6.5-1.5.8-2.6.8-1.1 0-1.9-.2-2.5-.7-.6-.5-.8-1.2-.8-2 0-.7.2-1.2.6-1.6.4-.4 1-.8 1.8-1.1.4-.1.7-.3.9-.4.2-.1.2-.2.2-.4 0-.2-.1-.3-.2-.4-.2-.1-.4-.1-.8-.1-.4 0-.7.1-.9.2-.2.1-.3.4-.4.8h-1.2zm-5.4-1.2h4.3v1.2H10v5.4H8.7v-5.4H6.8v-1.2z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Laravel",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-7 h-7">
                      <path
                        fill="#FF2D20"
                        d="M21.5 5.5l-9-5.2-9 5.2v10.4l9 5.2 9-5.2V5.5zm-9-3.5l6.9 4-2.4 1.4-6.9-4 2.4-1.4zm-6.9 14.4v-6.9l6.9 4v6.9l-6.9-4zm8.4 2.5l-6.9-4 2.4-1.4 6.9 4-2.4 1.4zm0-3.9v-6.9l6.9-4v6.9l-6.9 4z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Vue.js",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-7 h-7">
                      <path
                        fill="#41B883"
                        d="M12.012 18.576l7.46-12.92h-3.322l-4.138 7.163-4.138-7.163H4.552l7.46 12.92z"
                      />
                      <path
                        fill="#35495E"
                        d="M12.012 15.013l4.583-7.935h-3.322l-1.26 2.183-1.26-2.183H7.429l4.583 7.935z"
                      />
                    </svg>
                  ),
                },
                {
                  name: ".NET",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-7 h-7">
                      <path
                        fill="#512BD4"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 13H8.5V9H10v6zm5.5 0h-3V9h1.5v4.5h1.5V15zm2.5-4.5h-1.5V15H15V10.5h-1.5V9h4v1.5z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "PostgreSQL",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-7 h-7">
                      <path
                        fill="#336791"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-2.3c-.85 0-1.84.52-2.32 1.3v-1.11H5.89v5.37h2.79v-3.26c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v3.26h2.79v-5.36h-3.26z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "MySQL",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-7 h-7">
                      <path
                        fill="#00758F"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13.5h-2v-5h2v5zm4 0h-2v-3.5h-1v3.5h-2v-5h2v1.5h1V10h2v5z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Swagger",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-7 h-7">
                      <path
                        fill="#85EA2D"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 13.5h-9v-1h9v1zm0-2h-9v-1h9v1zm0-2h-9v-1h9v1z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Git",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-7 h-7">
                      <path
                        fill="#F05032"
                        d="M21.6 11.2L12.8 2.4c-.5-.5-1.3-.5-1.8 0L9.4 4.1l3.1 3.1c.5-.2 1.1-.1 1.5.3.4.4.5 1 .3 1.5l3.1 3.1c.5-.2 1.1-.1 1.5.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.5-1-.3-1.5l-3.1-3.1v4.4c.2.1.4.3.5.5.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1.2-.2.4-.4.5-.5V9.4c-.2-.1-.4-.3-.5-.5-.2-.5-.1-1.1.3-1.5L7.9 4.3 2.4 9.8c-.5.5-.5 1.3 0 1.8l8.8 8.8c.5.5 1.3.5 1.8 0l8.6-8.6c.5-.4.5-1.2 0-1.6z"
                      />
                    </svg>
                  ),
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
                  <svg
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
                  </svg>
                </h3>
                <p className="text-xs text-[#333333] font-semibold leading-relaxed mb-4 group-hover:text-white transition-colors">
                  Built a robust RESTful API with full CRUD functionality,
                  utilizing the DTO pattern, custom request validation,
                  pagination, filtering, and search options.
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
                  SQLi Laboratory App
                  <svg
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
                  </svg>
                </h3>
                <p className="text-xs text-[#333333] font-semibold leading-relaxed mb-4 group-hover:text-white transition-colors">
                  Final Year Project (Grade A). Developed an intentionally
                  vulnerable application to simulate SQL injection vectors and
                  documented secure coding mitigation steps.
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
                    Full Stack Developer (PROTÉGÉ)
                  </h3>
                  <div className="text-xs font-black text-[#ff007f] mb-1">
                    HeiTech Padu Berhad
                  </div>
                  <div className="text-[11px] font-bold text-[#666666]">
                    Sep 2025 – Present
                  </div>
                  <p className="text-xs text-[#222222] font-semibold leading-relaxed mt-2">
                    Implementing enterprise Angular frontend modules and
                    building Java Spring Boot backend business logic for a major
                    government system revamp.
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
                    Managed 8,000+ records of vehicle data into centralized
                    systems, collaborating with data scientists to optimize the
                    digital library pipeline.
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
                    Built frontend components in Vue.js and backend logic via
                    Laravel for wholesale ordering frameworks and automated PDF
                    generation tools.
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
          © 2026 MAI. | Built with React & Tailwind
        </footer>
      </div>
    </div>
  );
}
