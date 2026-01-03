export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        
        {/* Avatar */}
        <div className="w-32 h-32 rounded-full bg-yellow-400 flex items-center justify-center text-4xl font-bold text-black mb-6">
          SP
        </div>

        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I’m <span className="text-yellow-400">Sujal Pathak</span>
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          Aspiring Software Developer | BCA Final Year Student
        </p>

        <p className="mt-4 max-w-xl text-gray-400">
          I build modern, responsive web applications using
          React, Next.js, and Tailwind CSS.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#about"
            className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300"
          >
            About Me
          </a>
          <a
            href="#skills"
            className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-800"
          >
            Skills
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-black"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
          About Me
        </h2>

        <p className="max-w-3xl text-gray-300 mb-4">
          I am a BCA final year student with a strong interest in
          software development and web technologies. I enjoy
          learning new tools and building projects that solve
          real-world problems.
        </p>

        <p className="max-w-3xl text-gray-400">
          My goal is to secure an entry-level software developer
          role where I can grow my skills and contribute to
          impactful projects.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gray-900"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Git", "Basics of Python"].map(
            (skill) => (
              <div
                key={skill}
                className="px-6 py-4 border border-gray-700 rounded-lg bg-black text-gray-300"
              >
                {skill}
              </div>
            )
          )}
        </div>
      </section>
      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-black"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
          {/* Project 1 */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-400 mb-4">
              Personal portfolio built using Next.js and Tailwind CSS.
            </p>
            <p className="text-sm text-gray-500">
              Tech: Next.js, React, Tailwind
            </p>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Student Management System</h3>
            <p className="text-gray-400 mb-4">
              A basic CRUD application for managing student records.
            </p>
            <p className="text-sm text-gray-500">
              Tech: HTML, CSS, JavaScript
            </p>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Calculator App</h3>
            <p className="text-gray-400 mb-4">
              Simple calculator application with clean UI.
            </p>
            <p className="text-sm text-gray-500">
              Tech: JavaScript
            </p>
          </div>
        </div>
        /public/Sujal_Pathak_Resume.pdf

        <a
  href="/Sujal_Pathak_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-2 bg-blue-600 text-white rounded"
>
  View Resume
</a>
<a
  href="/Sujal_Pathak_Resume.pdf"
  download
  className="px-4 py-2 bg-green-600 text-white rounded"
>
  Download Resume
</a>

      </section>
      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gray-900"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
          Contact Me
        </h2>

        <p className="text-gray-300 mb-6 max-w-xl">
          I’m currently looking for entry-level opportunities or internships.
          Feel free to reach out to me.
        </p>

        <div className="space-y-4">
         <p className="text-gray-400">
        Email:{" "}
        <a
        href="mailto:pathaksujal9555@gmail.com"
        className="text-white underline hover:text-blue-400"
  >
         pathaksujal955@gmail.com
  </a>
</p>
          <p className="text-gray-400">
          LinkedIn:{" "}
  <a
          href="https://linkedin.com/in/sujal-pathak-1353b830a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline hover:text-blue-400"
  >
           linkedin.com/in/sujal-pathak
  </a>
</p>
        <p className="text-gray-400">
        Github:{" "}
        <a
        href="https://github.com/Pathak-Sujal"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white underline hover:text-blue-400"
   >
         https://github.com/Pathak-Sujal
  </a>
</p>
        </div>
      </section>
    </main>
  );
}