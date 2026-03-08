import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
     <div className="bg-emerald-950 py-16 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Your Yard Work Done?
          </h2>
          <p className="text-emerald-200/80 mb-10 text-lg">
            Join thousands of satisfied customers who trust us with their yard
            care needs.
          </p>
          <Link href="/book">
          <button className="bg-white text-emerald-950 px-10 py-4 rounded-md font-bold text-lg hover:bg-emerald-50 transition-all flex items-center justify-center gap-2 mx-auto">
            {/* <Calendar size={20} /> */}
            Book Your Service Now
          </button>
           </Link>
        </div>
      </div>
  )
}

export default Banner
