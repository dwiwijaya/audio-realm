import PageHeading from '@/components/common/PageHeading'
import Link from 'next/link'
import React from 'react'

const HomeRecomendation = () => {
    return (
        <div className=''>
            <PageHeading icon="bx bx-like" title="Curated Recommendations" description="Discover Top Picks and Must-Have Gear Selected by Our Audiophile Experts" />
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                <Link href="/" className="text-sm card flex gap-2 items-center justify-center">
                    <div className="bx bx-wallet"></div> 0-300K IDR
                </Link>
                <Link href="/" className="text-sm card flex gap-2 items-center justify-center">
                    <div className="bx bx-wallet"></div> 300K-500K IDR
                </Link>
                <Link href="/" className="text-sm card flex gap-2 items-center justify-center">
                    <div className="bx bx-wallet"></div> 500K-1000K IDR
                </Link>
                <Link href="/" className="text-sm card flex gap-2 items-center justify-center">
                    <div className="bx bx-wallet"></div> 1000K-2000K IDR
                </Link>
                <Link href="/" className="text-sm card flex gap-2 items-center justify-center">
                    <div className="bx bx-wallet"></div> 2000K-3000K IDR
                </Link>
                <Link href="/" className="text-sm card flex gap-2 items-center justify-center">
                    <div className="bx bx-wallet"></div> 3000k-4000K IDR
                </Link>
                <Link href="/" className="text-sm card flex gap-2 items-center justify-center">
                    <div className="bx bx-wallet"></div> 4000K-5000K IDR
                </Link>
                <Link href="/" className="text-sm card flex gap-2 items-center justify-center">
                    <div className="bx bx-infinite"></div> UNLIMITED
                </Link>
            </div>
        </div>
    )
}

export default HomeRecomendation