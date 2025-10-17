"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import React from "react"

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
    fullDescription:
      "Sketching is a solo event where participants can express their artistic talents through drawing. You have 2 hours to complete your artwork on A3 sheet or chart paper. Choose from various themes that celebrate Uttarakhand's culture, heritage, and natural beauty.",
    requirements: [
      "A3 sheet or chart paper",
      "Drawing materials of your choice",
      "2 hours duration",
      "Solo participation only",
    ],
  },
  {
    id: 2,
    name: "Singing & Dancing",
    slug: "singing-dancing",
    duration: "Solo: 4min (Singing) | 4min (Dancing)\nGroup: 6min (Singing) | 7min (Dancing)",
    icon: "🎭",
    themes: ["Freestyle & Fusion", "Folk & Contemporary", "Western & Classical", "Choliya, Nati, Jhora"],
    remarks: "Solo & Group categories available",
    description:
      "Perform your best in singing or dancing. Both solo and group categories are available with flexible time limits.",
    fullDescription:
      "Showcase your performance skills in singing or dancing. This event offers both solo and group categories with different time allocations. Choose from various themes including freestyle, folk, contemporary, western, and classical styles.",
    requirements: [
      "Solo: 4 minutes for singing or dancing",
      "Group: 6 minutes for singing, 7 minutes for dancing",
      "Background music can be provided",
      "Traditional or modern attire welcome",
    ],
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
    fullDescription:
      "Capture the essence of Uttarakhand through your lens. This event includes both photography and filmmaking categories. Showcase the beauty, culture, traditions, and spirit of the hills through your creative work.",
    requirements: [
      "Photography: Max 3 photos per participant",
      "Filmmaking: 3-5 minutes duration",
      "Original work only (no AI or heavy editing)",
      "High resolution required (min 2000px for photos)",
      "MP4 format for films, Full HD (1080p)",
    ],
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
    fullDescription:
      "Perform as a music band and showcase your group's musical talents. You have 10 minutes to present your best performance. This is a group event that celebrates musical collaboration and coordination.",
    requirements: [
      "Group performance only",
      "10 minutes duration",
      "Minimum 3 members",
      "Own instruments or arrangements",
      "Background music allowed",
    ],
  },
]

export default function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params)

  const event = events.find((e) => e.slug === slug)

  if (!event) {
    return (
      <main className="min-h-screen relative flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/uttrakhand-bg.jpeg"
            alt="Uttarakhand Celebration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/75 to-slate-950/90" />
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-bold text-orange-400 mb-4">Event Not Found</h1>
          <Link href="/events">
            <Button className="bg-orange-500 hover:bg-orange-600">Back to Events</Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/uttrakhand-bg.jpeg"
          alt="Uttarakhand Celebration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/75 to-slate-950/90" />
      </div>

      {/* Header */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-600/20 to-red-600/20 border-b border-orange-400/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <Link href="/events" className="text-cyan-400 hover:text-cyan-300 mb-4 inline-block">
            ← Back to Events
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{event.icon}</span>
            <div>
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">
                {event.name}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="bg-slate-800/50 backdrop-blur-md border border-orange-400/30 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-orange-300 mb-4">About This Event</h2>
                <p className="text-gray-300 leading-relaxed mb-6">{event.fullDescription}</p>

                <h3 className="text-xl font-bold text-cyan-300 mb-4">Requirements</h3>
                <ul className="space-y-2 mb-8">
                  {event.requirements.map((req, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start gap-3">
                      <span className="text-orange-400 font-bold">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-cyan-300 mb-4">Themes</h3>
                <div className="flex flex-wrap gap-2">
                  {event.themes.map((theme, idx) => (
                    <span
                      key={idx}
                      className="text-sm bg-gradient-to-r from-cyan-600/30 to-blue-700/30 text-cyan-100 px-4 py-2 rounded-full border border-cyan-400/30"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-slate-800/50 backdrop-blur-md border border-orange-400/30 rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-orange-300 mb-6">Event Details</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Duration</p>
                    <p className="text-cyan-300 font-semibold whitespace-pre-line">{event.duration}</p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm mb-2">Details</p>
                    <p className="text-cyan-300 font-semibold">{event.remarks}</p>
                  </div>

                  <Link href="/register" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 rounded-xl">
                      Register for This Event
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
