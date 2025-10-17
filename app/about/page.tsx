export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      {/* Header */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-600/20 to-red-600/20 border-b border-orange-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">
            About the Celebration
          </h1>
          <p className="text-xl text-gray-300">Celebrating Uttarakhand's Rich Cultural Heritage</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Overview */}
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-orange-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-orange-300 mb-4">Silver Jubilee Celebration</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Silver Jubilee Celebration of Uttarakhand Foundation Day is a grand cultural event organized by BTKIT
              Dwarahat. This celebration aims to showcase the vibrant traditions, art, music, and cultural heritage of
              Uttarakhand, also known as "Devbhoomi" (Land of Gods).
            </p>
            <p className="text-gray-300 leading-relaxed">
              Through various cultural events and performances, we celebrate the spirit of Uttarakhand and provide a
              platform for talented individuals to express their creativity and showcase their skills.
            </p>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-orange-400/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">Event Information</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="text-orange-400 font-semibold mb-1">📅 Dates</p>
                  <p>November 2-9, 2025</p>
                </div>
                <div>
                  <p className="text-orange-400 font-semibold mb-1">📍 Venue</p>
                  <p>MPH, BTKIT Dwarahat</p>
                </div>
                <div>
                  <p className="text-orange-400 font-semibold mb-1">🏛️ Organized By</p>
                  <p>BTKIT Dwarahat</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-orange-400/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                "Enhancing Social and Cultural Skills" - We believe in celebrating diversity, promoting cultural
                awareness, and providing a platform for individuals to develop their artistic and social skills through
                participation in meaningful cultural events.
              </p>
            </div>
          </div>

          {/* Events Overview */}
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-orange-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-orange-300 mb-6">Featured Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "🎨", name: "Sketching", desc: "Express creativity through art" },
                { icon: "🎭", name: "Singing & Dancing", desc: "Showcase performance skills" },
                { icon: "📸", name: "Photography & Filmmaking", desc: "Capture cultural moments" },
                { icon: "🎵", name: "Music Band", desc: "Group musical performances" },
              ].map((event) => (
                <div key={event.name} className="border border-cyan-400/30 rounded-lg p-4">
                  <div className="text-4xl mb-2">{event.icon}</div>
                  <h4 className="text-lg font-bold text-orange-300 mb-1">{event.name}</h4>
                  <p className="text-gray-400 text-sm">{event.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Participate */}
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-orange-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-orange-300 mb-6">Why Participate?</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold text-xl">✓</span>
                <span>Showcase your talents on a prestigious platform</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold text-xl">✓</span>
                <span>Celebrate and preserve Uttarakhand's cultural heritage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold text-xl">✓</span>
                <span>Develop social and cultural skills</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold text-xl">✓</span>
                <span>Connect with like-minded individuals and artists</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold text-xl">✓</span>
                <span>Gain recognition and appreciation for your work</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
