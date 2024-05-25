"use client"
import useSectionInView from '@/hooks/useSectionInView';
import { BioData } from '@/lib/data';
import React from 'react';
import SectionHeader from './SectionHeader';

const Education = () => {
    const { ref } = useSectionInView("Education");
    return (
<section id="education" className="flex flex-col xl:container  px-4 mt-12 md:mt-48 text-center scroll-mt-24 md:scroll-mt-12" ref={ref}>
    <div>
        <SectionHeader name="Education & Experience"/>
    </div>
            <div>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {BioData.map((item, index) => (
                        <li key={index}>
                            <div className='timeline-middle'>
                                {item.icon}
                            </div>
                            {index % 2 === 0 ? (
                                <div className='timeline-start md:text-end mb-10 w-full text-left'>
                                    <time className='text-3xl'>{item.date}</time>
                                    <div className='font-light'>{item.title}</div>
                                    <div className='text-md font-thin' dangerouslySetInnerHTML={{ __html: item.description.replace(/\.\s*/g, '.<br />') }} />
                                </div>
                            ) : (
                                <div className='timeline-end md:text-left mb-10 w-full text-left'>
                                    <time className='text-3xl'>{item.date}</time>
                                    <div className='font-light'>{item.title}</div>
                                    <div className='text-md font-thin' dangerouslySetInnerHTML={{ __html: item.description.replace(/\.\s*/g, '.<br />') }} />
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
        </div>
</section>
    );
}

export default Education;
