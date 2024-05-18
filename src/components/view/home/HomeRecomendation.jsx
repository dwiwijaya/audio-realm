import PageHeading from '@/components/common/PageHeading'
import Link from 'next/link'
import React from 'react'

const HomeRecomendation = () => {
    return (
        <div className=''>
            <PageHeading icon="bx bx-like" title="Curated Recommendations" description="Discover Top Picks and Must-Have Gear Selected by Our Audiophile Experts" />
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                <Link href="/" className="card flex items-center justify-center">
                    IDR 0-500K
                </Link>
                <Link href="/" className="card flex items-center justify-center">
                    IDR 500K-1000K
                </Link>
                <Link href="/" className="card flex items-center justify-center">
                    IDR 1000K-2000K
                </Link>
                <Link href="/" className="card flex items-center justify-center">
                    IDR 2000K++
                </Link>
            </div>
        </div>
    )
}

export default HomeRecomendation