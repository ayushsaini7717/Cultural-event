"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { link } from "fs"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/75 to-slate-950/90" />
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-orange-400">
            Silver Jubilee Celebration
          </h1>
          <p className="text-3xl md:text-4xl text-orange-300 font-semibold mb-4">
            Uttarakhand Foundation Day
          </p>
          <p className="text-xl text-cyan-200 italic mb-8">
            "Enhancing Social and Cultural Skills"
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Join us in celebrating Uttarakhand's vibrant traditions, art, and spirit through cultural events and
            performances.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/events">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-8 rounded-xl text-lg">
                Explore Events
              </Button>
            </Link>
            <Link href="/register">
              <Button
                variant="outline"
                className="border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 font-bold py-3 px-8 rounded-xl text-lg bg-transparent"
              >
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 px-6 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">4</div>
              <p className="text-gray-300">Cultural Events</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">Nov 2-9</div>
              <p className="text-gray-300">2025</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">MPH</div>
              <p className="text-gray-300">Venue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Preview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-300">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Sketching", icon: "🎨", desc: "Express your creativity through art" , link: '/events/sketching'},
              { name: "Singing & Dancing", icon: "🎭", desc: "Showcase your performance skills", link: '/events/singing-dancing' },
              { name: "Photography & Filmmaking", icon: "📸", desc: "Capture the essence of culture" , link: '/events/photography-filmmaking'},
              { name: "Music Band", icon: "🎵", desc: "Group musical performances", link: '/events/music-band'},
            ].map((event) => (
              <Link key={event.name} href={event.link}>
                <div className="bg-slate-800/50 backdrop-blur-md border border-orange-400/30 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer">
                  <div className="text-5xl mb-4">{event.icon}</div>
                  <h3 className="text-2xl font-bold text-orange-300 mb-2">{event.name}</h3>
                  <p className="text-gray-300">{event.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
