"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const events = [
  {
    id: 1,
    name: "Sketching (Solo)",
    slug: "sketching",
    duration: "02 Hrs",
    icon: "🎨",
    themes: [
      "Culture & Heritage",
      "Nature & Landscape",
      "Unity in Diversity of Hills",
      "From Struggle to Pride",
      "Harmony between Nature & Humanity",
      "Spirit of Devbhoomi",
    ],
    remarks: "A3 sheet & chart paper",
    description:
      "Express your artistic vision through sketching. Showcase your creativity with themes centered around Uttarakhand's rich cultural heritage and natural beauty.",
  },
  {
    id: 2,
    name: "Singing & Dancing",
    slug: "singing-dancing",
    duration:
      "Solo: 4min (Singing) | 4min (Dancing)\nGroup: 6min (Singing) | 7min (Dancing)",
    icon: "🎭",
    themes: ["Freestyle & Fusion", "Folk & Contemporary", "Western & Classical", "Choliya, Nati, Jhora"],
    remarks: "Solo & Group categories available",
    description:
      "Perform your best in singing or dancing. Both solo and group categories are available with flexible time limits.",
  },
  {
    id: 3,
    name: "Photography & Filmmaking",
    slug: "photography-filmmaking",
    duration: "Photography: Individual\nFilmmaking: 3-5 minutes",
    icon: "📸",
    themes: [
      "Soul of Himalaya",
      "Pahadi Life - Simple yet Beautiful",
      "Dance & Rhythm of Uttarakhand",
      "Festivals of the Hills",
      "Colors of Kumaon & Garhwal",
      "Colours of culture",
      "From Struggle to Statehood",
      "Journey to My Routes",
      "Voice of the Hills",
      "Rhythm of hills",
      "Pahadi life",
      "Chipkoo - The Spirit of Lives On",
    ],
    remarks: "Individual participation only",
    description:
      "Capture the essence of Uttarakhand through photography or filmmaking. Showcase the beauty, culture, and spirit of the hills.",
  },
  {
    id: 4,
    name: "Music Band",
    slug: "music-band",
    duration: "10 Min",
    icon: "🎵",
    themes: ["Group Performance"],
    remarks: "Group event",
    description:
      "Perform as a group with your music band. A 10-minute slot to showcase your musical talents and group coordination.",
  },
]

export default function EventsPage() {
  return (
    <main
      className="relative min-h-screen bg-slate-900"
      style={{
        backgroundImage: `url('/uttrakhand-bg.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Header */}
        <section className="py-16 px-6 bg-gradient-to-r from-orange-600/20 to-red-600/20 border-b border-orange-400/20">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">
              Cultural Events
            </h1>
            <p className="text-xl text-gray-300">
              Explore all the exciting events and showcase your talents
            </p>
          </motion.div>
        </section>

        {/* Events Grid */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={event.slug}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 25px rgba(34, 211, 238, 0.2)",
                  }}
                >
                  <Link href={`/events/${event.slug}`}>
                    <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 border border-orange-400/30 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer h-full backdrop-blur-sm">
                      <div className="text-5xl mb-4">{event.icon}</div>
                      <h3 className="text-2xl font-bold text-orange-300 mb-2">
                        {event.name}
                      </h3>
                      <p className="text-gray-300 mb-4">{event.description}</p>
                      <p className="text-sm text-cyan-300 font-semibold">
                        ⏱️ {event.duration.split("\n")[0]}
                      </p>
                      <div className="mt-4 text-sm text-gray-400">
                        Click to view details →
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
