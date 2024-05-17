import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Breakline from '../elements/BreakLine'
import { motion } from 'framer-motion';
import dateFormat from "dateformat";
import { calculateReadingTime } from '@/helpers';

const Blog = ({
    id,
    title,
    image_url,
    date,
    slug,
    excerpt,
    content,
    total_views_count,
    review_mode,
    author,
    isExcerpt = true,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const defaultImage = '/images/placeholder.png';
    const slideDownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };
    const readingTimeMinutes = calculateReadingTime(content) ?? 0;
    // const reviewMode = 
    return (
        <Link href={`/`} >
            <div
                className='group relative flex flex-col border dark:border-neutral-800 min-w-96 h-[400px] w-full'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className='duration-500 relative rounded-xl'
                    style={{
                        height: '400px',
                        overflow: 'hidden',
                    }}
                >
                    <Image
                        src={image_url || defaultImage}
                        alt={title}
                        fill={true}
                        sizes='100vw, 100vh'
                        className='object-cover object-left w-full h-full transform transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm'
                    />
                    {
                        review_mode == 0 ?
                            <div className='z-10 !border-none shadow-slate-50 badge !text-base !rounded-t-none absolute top-0 left-5 bg-secondary flex items-center gap-1'><i className="bx bx-medal"></i>Friendly Review</div> :
                            <div className='z-10 !border-none shadow-slate-50 badge !text-base !rounded-t-none absolute top-0 left-5 bg-secondary flex items-center gap-1'><i className="bx bx-rocket"></i>Advanced Review</div>
                    }
                    <div className='absolute inset-0 bg-gradient-to-b from-black/20 to-black opacity-90 transition-opacity duration-300'></div>
                </div>

                <div className='absolute flex flex-col justify-between p-5 space-y-4 h-full'>
                    <div className='flex flex-wrap gap-2'>

                    </div>

                    <div className='flex flex-col justify-end'>
                        <div className='flex flex-col space-y-3'>
                            <h3 className='font-sora text-lg font-medium text-neutral-100 group-hover:underline group-hover:underline-offset-4 '>
                                {title}
                            </h3>
                            <div className='flex gap-1 items-center text-neutral-400'>
                                <i className='bx bx-calendar' />
                                <span className='text-xs ml-0.5'>{dateFormat(date, 'mmmm dd, yyyy')}</span>
                            </div>
                            {isExcerpt && (
                                <p className='leading-relaxed text-sm text-neutral-400'>
                                    {excerpt}
                                </p>
                            )}
                        </div>
                        <Breakline className='!border-neutral-500' />
                        <div className='flex justify-between gap-4 text-neutral-400 px-0.5'>
                            <div className="author flex items-center gap-2">
                                <i className="bx bx-user"></i> <span className='text-sm whitespace-nowrap'>{author}</span>
                            </div>

                            <motion.div
                                variants={slideDownVariants}
                                initial='visible'
                                animate={isHovered ? 'hidden' : 'visible'}
                                className={`
                                    'flex justify-between gap-4 
                                    ${isHovered && 'hidden'}`
                                }
                            >
                                <div className="flex items-center gap-4">
                                    <div className='flex gap-1 items-center'>
                                        <i className='bx bx-show-alt' size={14} />
                                        <span className='text-xs font-medium ml-0.5'>
                                            {total_views_count.toLocaleString()} VIEWS
                                        </span>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <i className='bx bx-time' size={14} />
                                        <span className='text-xs font-medium ml-0.5'>
                                            {readingTimeMinutes.toLocaleString()} MINS READ
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={slideDownVariants}
                                initial='hidden'
                                animate={isHovered ? 'visible' : 'hidden'}
                                className={`flex gap-1 items-center ${!isHovered && 'hidden'}`}
                            >
                                <span className='text-xs font-medium mr-0.5 whitespace-nowrap'>READ MORE</span>
                                <i className='bx bx-right-arrow-alt' size={16} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Blog