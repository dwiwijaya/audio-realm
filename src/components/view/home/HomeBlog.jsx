import PageHeading from '@/components/common/PageHeading'
import Image from 'next/image'
import React from 'react'

const HomeBlog = () => {
    return (
        <div className=''>
            <PageHeading title="Insights & Stories" description="Dive Into Articles, Reviews, and Musings from Audiophiles and Experts" />
            <div className='flex gap-2 mb-3 overflow-auto overflow-y-hidden scrollbar-hide'>
                <article className="group/portfolio card min-w-96">
                    <div className="flex items-center justify-between my-2">
                        <div className="flex item-center gap-1">
                            <i className="bx bx-user"></i> <p>Dwi Wijaya</p>
                        </div>
                        <div className="flex item-center gap-1">
                            <i className="bx bx-time"></i> <p>2min ago</p>
                        </div>
                    </div>
                    <h1 className='text-lg font-semibold mb-3'>Breaking Down the Barrier: Moondrop May</h1>
                    <div className="relative work__thumbnail aspect-thumbnail rounded-md">
                        <div className="absolute flex items-center top-2 left-2 gap-2 z-[1]">
                            <div className="px-2 py-1 bg-orange-300 text-black rounded-md z-10 flex items-center gap-1">
                                <i className="bx bx-medal"></i> Newbie Friendly
                            </div>
                        </div>
                        <div className="relative">
                            <Image src="https://assets-global.website-files.com/627128d862c9a44234848dda/65782319855f03a703183836_MAY_01.jpg" alt="" width={300} height={300} className={`aspect-thumbnail object-cover max-h-56 w-full rounded-md`} quality={100} />
                            <div className="flex gap-1 absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 justify-center items-center text-white group-hover/portfolio:opacity-80 ">
                                View Project<i className="bx bx-right-arrow-alt"></i>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="group/portfolio card min-w-96">
                    <div className="flex items-center justify-between my-2">
                        <div className="flex item-center gap-1">
                            <i className="bx bx-user"></i> <p>Dwi Wijaya</p>
                        </div>
                        <div className="flex item-center gap-1">
                            <i className="bx bx-time"></i> <p>2min ago</p>
                        </div>
                    </div>
                    <h1 className='text-lg font-semibold mb-3'>Breaking Down the Barrier: Moondrop May</h1>
                    <div className="relative work__thumbnail aspect-thumbnail rounded-md">
                        <div className="absolute flex items-center top-2 left-2 gap-2 z-[1]">
                            <div className="px-2 py-1 bg-orange-300 text-black rounded-md z-10 flex items-center gap-1">
                                <i className="bx bx-medal"></i> Newbie Friendly
                            </div>
                        </div>
                        <div className="relative">
                            <Image src="https://assets-global.website-files.com/627128d862c9a44234848dda/65782319855f03a703183836_MAY_01.jpg" alt="" width={300} height={300} className={`aspect-thumbnail object-cover max-h-56 w-full rounded-md`} quality={100} />
                            <div className="flex gap-1 absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 justify-center items-center text-white group-hover/portfolio:opacity-80 ">
                                View Project<i className="bx bx-right-arrow-alt"></i>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default HomeBlog