import Link from 'next/link'
import React from 'react'

const HomeEvent = () => {
  return (
    <div className='card !rounded-lg relative'>

      <h1 className="group text-lg flex items-center gap-2 font-bold">
        <i className="transition-all group-hover:scale-110 group-hover:-rotate-6 bx bx-calendar"></i> Upcoming Community Events
      </h1>
      <p className='text-sm mt-1'> Join us in our upcoming events and connect with fellow audiophiles. Stay tuned for exciting gatherings and discussions!</p>
      <div className="flex items-center mt-5 mb-1 gap-1">
        <span className="!px-3 btn btn-sm bg-secondary">4</span>
        <Link className='group btn btn-sm bg-secondary ' href='/'>
          Browse Events <i className="bx bx-right-arrow-alt group-hover:ml-1 transition-base"></i>
        </Link>
      </div>
    </div>
  )
}

export default HomeEvent