"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.0, 0.0, 0.2, 1] },
    },
  }

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  }

  const scaleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.0, 0.0, 0.2, 1] },
    },
  }

  const slideInVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.0, 0.0, 0.2, 1] },
    },
  }

  const events = [
    { name: "Sketching", icon: "🎨", desc: "Express your creativity through art", link: '/events/sketching' },
    { name: "Singing & Dancing", icon: "𝄞 🕺", desc: "Showcase your performance skills", link: '/events/singing-dancing' },
    { name: "Photography & Filmmaking", icon: "📸", desc: "Capture the essence of culture", link: '/events/photography-filmmaking' },
    { name: "Music Band", icon: "🎵", desc: "Group musical performances", link: '/events/music-band' },
  ]

  const stats = [
    { value: "4", label: "Cultural Events", color: "text-orange-400" },
    { value: "Nov 2-9", label: "2025", color: "text-cyan-400" },
    { value: "MPH", label: "Venue", color: "text-blue-400" },
  ]

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/75 to-slate-950/90"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"
            animate={{
              x: [0, 50, -50, 0],
              y: [0, 30, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 50, 0],
              y: [0, -30, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
            }}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-orange-400"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.0, 0.0, 0.2, 1] }}
          >
            Silver Jubilee Celebration
          </motion.h1>

          <motion.p
            className="text-3xl md:text-4xl text-orange-300 font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.0, 0.0, 0.2, 1] }}
          >
            Uttarakhand Foundation Day
          </motion.p>

          <motion.p
            className="text-xl text-cyan-200 italic mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            "Enhancing Social and Cultural Skills"
          </motion.p>
           <motion.p
            className="text-lg text-yellow-300 font-semibold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            🏆 Winners will get a chance to participate in the State Level Competition at Dehradun — with a grand prize of ₹1,00,000!
          </motion.p>
           <motion.p
            className="text-lg text-red-500 font-semibold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            📅 Last date of registration: <span className="underline font-bold">24/10/2025</span>
          </motion.p>
          <motion.p
            className="text-lg text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Join us in celebrating Uttarakhand's vibrant traditions, art, and spirit through cultural events and
            performances.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={containerVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/events">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-orange-500/50">
                  Explore Events
                </button>
              </Link>
            </motion.div>

            <motion.div variants={containerVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/register">
                <button className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 font-bold py-3 px-8 rounded-xl text-lg bg-transparent transition-all shadow-lg hover:shadow-cyan-500/50">
                  Register Now
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 px-6 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={containerVariants}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  className={`text-4xl font-bold ${stat.color} mb-2`}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Events Preview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-orange-300"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured Events
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {events.map((event, i) => (
              <motion.div
                key={event.name}
                //@ts-ignore
                variants={slideInVariants}
                custom={i}
                whileHover={{ scale: 1.03, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link href={event.link}>
                  <motion.div
                    className="bg-slate-800/50 backdrop-blur-md border border-orange-400/30 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer h-full"
                    whileHover={{
                      borderColor: "rgba(34, 211, 238, 0.8)",
                    }}
                  >
                    <motion.div
                      className="text-5xl mb-4"
                      animate={{ y: [-5, 5, -5] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      {event.icon}
                    </motion.div>

                    <motion.h3 className="text-2xl font-bold text-orange-300 mb-2">
                      {event.name}
                    </motion.h3>

                    <motion.p
                      className="text-gray-300"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {event.desc}
                    </motion.p>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
