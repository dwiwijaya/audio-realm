import PageHeading from '@/components/common/PageHeading'
import { RECOMENDATION_CLASS } from '@/constant/recomendation'
import Link from 'next/link'
import React from 'react'

const HomeRecomendation = () => {
    return (
        <div className=''>
            <PageHeading icon="transition-all group-hover:scale-110 group-hover:-rotate-12 bx bx-like" title="Curated Recommendations" description="Discover Top Picks and Must-Have Gear Selected by Our Audiophile Experts" />
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                {RECOMENDATION_CLASS.map((value) => (
                    <Link key={value.key} href={`recomendation/${value.key}`} className="group text-sm card flex gap-2 items-center justify-center">
                    <div className={`transition-all group-hover:scale-110 group-hover:-rotate-12 bx bx-${value.icon}`}></div> {value.class}
                </Link>
                ))}
            </div>
        </div>
    )
}

export default HomeRecomendation