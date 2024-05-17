import PageHeading from '@/components/common/PageHeading'
import React from 'react'

const HomeRecomendation = () => {
    return (
        <div className=''>
            <PageHeading icon="bx bx-like" title="Curated Recommendations" description="Discover Top Picks and Must-Have Gear Selected by Our Audiophile Experts" />
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
            </div>
        </div>
    )
}

export default HomeRecomendation