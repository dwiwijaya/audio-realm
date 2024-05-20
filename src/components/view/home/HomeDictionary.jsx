import PageHeading from '@/components/common/PageHeading'
import { TERM_CATEGORIES } from '@/constant/term'
import Link from 'next/link'
import React from 'react'

const HomeDictionary = () => {
  return (
    <div className=''>
      <PageHeading icon="bx bx-book" title="Explore Audiophile Glossary" description="Unlock the World of Audio Jargon with Our Comprehensive Dictionary" />
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
        {TERM_CATEGORIES.map((value) => (
          <Link href={`/terms/${value.key}`} className="group card" key={value.key}>
            <h3 className='font-bold text-sm whitespace-nowrap group-hover:tracking-wide transition-base group-hover:underline group-hover:underline-offset-4'>{value.title}</h3>
            <p className='text-xs mt-1'>{value.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomeDictionary