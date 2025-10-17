"use client";

export default function GuidelinesPage() {
  return (
    <main
      className="min-h-screen bg-gradient-to-b from-slate-900/90 via-slate-900/90 to-slate-950/90 bg-[url('/images/bg-image.jpg')] bg-cover bg-center bg-fixed"
    >
      {/* Header */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-600/20 to-red-600/20 border-b border-orange-400/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
            Guidelines & Requirements
          </h1>
          <p className="text-xl text-gray-300">
            Important information for all participants
          </p>
        </div>
      </section>

      {/* Guidelines Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Photography */}
          <div className="bg-gradient-to-br from-slate-700/60 to-slate-800/60 border border-orange-400/30 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-orange-300 mb-6 flex items-center gap-3">
              <span>📸</span> Photography Requirements
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Individual participation only</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Maximum 3 photographs per participant</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Minimum resolution: 2000px (long side)</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>JPEG format, maximum 10 MB per file</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Original work only (no AI or heavy editing)</span></li>
            </ul>
          </div>

          {/* Filmmaking */}
          <div className="bg-gradient-to-br from-slate-700/60 to-slate-800/60 border border-orange-400/30 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-orange-300 mb-6 flex items-center gap-3">
              <span>🎬</span> Filmmaking Requirements
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Duration: 3–5 minutes</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Format: MP4, Full HD (1080p)</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Maximum file size: 500 MB</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Language: Hindi or English</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Background music and credits allowed</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>File naming: Name_Institute_Title.mp4</span></li>
            </ul>
          </div>

          {/* General Guidelines */}
          <div className="bg-gradient-to-br from-slate-700/60 to-slate-800/60 border border-orange-400/30 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-orange-300 mb-6 flex items-center gap-3">
              <span>✨</span> General Guidelines
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>All participants must register before the event</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Respect the event schedule and timing</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Maintain decorum and cultural sensitivity</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Follow all safety and security protocols</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Organizers reserve the right to disqualify inappropriate entries</span></li>
            </ul>
          </div>

          {/* Submission Guidelines */}
          <div className="bg-gradient-to-br from-slate-700/60 to-slate-800/60 border border-orange-400/30 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-orange-300 mb-6 flex items-center gap-3">
              <span>📤</span> Submission Guidelines
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Submit entries through the online portal or email</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Include participant details and event category</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Ensure all files are properly named and formatted</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Submission deadline: Check registration page for dates</span></li>
            </ul>
          </div>

          {/* Judging Criteria */}
          <div className="bg-gradient-to-br from-slate-700/60 to-slate-800/60 border border-orange-400/30 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-orange-300 mb-6 flex items-center gap-3">
              <span>🏆</span> Judging Criteria
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Creativity and originality of the concept</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Technical quality (lighting, composition, sound, etc.)</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Relevance to the theme of the event</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Impact and storytelling</span></li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span><span>Overall presentation and execution</span></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
