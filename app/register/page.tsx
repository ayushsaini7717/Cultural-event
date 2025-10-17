"use client"

import { useEffect } from "react"

export default function RegisterPage() {
  useEffect(() => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSdGwCBBI6yy1WOhKvBdDwVATmyGxB1Zk67jkVJGQy6xeiufLQ/viewform?usp=header"
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">Redirecting to Registration Form...</h1>
        <p className="text-gray-300 mb-6">If you are not redirected automatically, please click the link below:</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdGwCBBI6yy1WOhKvBdDwVATmyGxB1Zk67jkVJGQy6xeiufLQ/viewform?usp=header"
          className="inline-block bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-8 rounded-xl text-lg"
        >
          Open Registration Form
        </a>
      </div>
    </main>
  )
}
