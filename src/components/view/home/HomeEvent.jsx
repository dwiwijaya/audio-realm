import Link from 'next/link'
import React from 'react'

const HomeEvent = () => {
  return (
    <div className='card !rounded-lg'>
      <h1 className="text-lg flex items-center gap-2 font-bold">
        <i className="bx bx-calendar"></i> Upcoming Audiophile Events <span className="badge bg-secondary">4</span>
      </h1>
      <p className='text-sm mt-1'>Stay Tuned for Exciting Gatherings, Workshops, and Exhibitions in the Audiophile Community</p>
      <Link className='btn bg-secondary btn-sm flex items-center mt-3 mb-1' href='/'>
        See Event Detail <i className="bx bx-right-arrow-alt"></i>
      </Link>
    </div>
  )
}

export default HomeEvent