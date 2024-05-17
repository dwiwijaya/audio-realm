import Blog from '@/components/common/Blog'
import PageHeading from '@/components/common/PageHeading'
import Image from 'next/image'
import React from 'react'

const HomeBlog = () => {
    const data = [
        {
            id: '1',
            title: 'Breaking Down the Barrier: Moondrop May',
            image_url: 'https://assets-global.website-files.com/627128d862c9a44234848dda/65782319855f03a703183836_MAY_01.jpg',
            date: 'Fri May 17 2024 10:45:56 GMT+0000 (Coordinated Universal Time)',
            slug: 'aaa',
            excerpt: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
            total_views_count: '0',
            review_mode: '0',
            author: 'Dwi Wijaya',
            isExcerpt: true
        },
        {
            id: '2',
            title: 'Rich Accessories Imersive Gaming Experience, TRN Conch',
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiSDxifbPa5mm1atvNCicFHTh8IjxQXWeohP5KQ4d66Q&s',
            date: 'Fri May 17 2024 10:45:56 GMT+0000 (Coordinated Universal Time)',
            slug: 'aaa',
            excerpt: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
            total_views_count: '0',
            review_mode: '1',
            author: 'Dwi Wijaya',
            isExcerpt: true
        }
    ]
    return (
        <div className=''>
            <PageHeading title="Insights & Stories" description="Dive Into Articles, Reviews, and Musings from Audiophiles and Experts" />
            <div className='flex gap-2 mb-3 overflow-auto overflow-y-hidden scrollbar-hide'>
                {data.map((blog,index) => (
                    <Blog key={index} {...blog}/>
                ))}
            </div>
        </div>
    )
}

export default HomeBlog