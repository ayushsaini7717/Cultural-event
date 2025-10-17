export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-orange-400/20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-orange-400 font-bold mb-4">About</h3>
            <p className="text-gray-400 text-sm">
              Silver Jubilee Celebration of Uttarakhand Foundation Day organized by BTKIT Dwarahat.
            </p>
          </div>
          <div>
            <h3 className="text-orange-400 font-bold mb-4">Event Details</h3>
            <p className="text-gray-400 text-sm">📅 November 2-9, 2025</p>
            <p className="text-gray-400 text-sm">📍 MPH, BTKIT Dwarahat</p>
          </div>
          <div>
            <h3 className="text-orange-400 font-bold mb-4">Contact</h3>
             <p className="text-gray-400 text-sm">
              Ayush Saini, Mob-7417089755 <br />
              Bhumi Pandey, Mob-6395667502 <br />
              Mukul Pandey, Mob-7983074088 <br/>
              Chandraditya Sati, Mob-9410959664 <br/>
              Ankita bhoj, Mob-8218435916 <br/>
              </p>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Silver Jubilee Celebration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
