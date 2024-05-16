import PageHeading from '@/components/common/PageHeading'
import React from 'react'

const HomeDictionary = () => {
  return (
    <div className=''>
      <PageHeading title="Explore Audiophile Glossary" description="Unlock the World of Audio Jargon with Our Comprehensive Dictionary" />
      <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
        <div className="card">
          <h3 className='font-bold text-sm whitespace-nowrap'>Sound Quality</h3>
          <p className='text-xs mt-1'>Terms related to the overall audio performance</p>
        </div>
        <div className="card">
          <h3 className='font-bold text-sm whitespace-nowrap'>Technical Performance</h3>
          <p className='text-xs mt-1'>Terms focusing to the technical specifications and performance</p>
        </div>
        <div className="card">
          <h3 className='font-bold text-sm whitespace-nowrap'>Design & Comfort</h3>
          <p className='text-xs mt-1'>terms related to the physical design and comfort aspects</p>
        </div>
        <div className="card">
          <h3 className='font-bold text-sm whitespace-nowrap'>Others</h3>
          <p className='text-xs mt-1'>Terms that don't fit into other categories but are still relevant</p>
        </div>
      </div>
    </div>
  )
}

export default HomeDictionary