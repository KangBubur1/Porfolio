"use client"
import useSectionInView from "@/hooks/useSectionInView";
import { SkillsData } from "@/lib/data";
import React from 'react';
import SectionHeader from "./SectionHeader";

const Skills = () => {
    const { ref } = useSectionInView("Skills");
    return (
        <section id="skills" className="flex flex-col xl:container  px-4 mt-12 md:mt-48 text-center scroll-mt-12" ref={ref}>
            <div >
                <SectionHeader name="Skills"/>
            </div>
            <div>
                <ul
                    className="
                    grid
                    grid-cols-2
                    sm:flex
                    sm:flex-wrap
                    justify-center
                    gap-2
                    text-lg
                    mb-8
                    "
                >
                    {SkillsData.map((skill, index) => (
                        <li
                            className="
                            text-sm
                            sm:text-base
                            glass-morph
                            rounded-xl
                            px-5
                            py-3"
                            key={index}
                        >
                            {skill.skillName} - {skill.proficiency}
                        </li>
                    ))}
                </ul>
                <p>Currently I am trying to understand the concept of blockchain system such as ICP, using Motoko/Typescript for the language.</p>
            </div>
        </section>
    );
}

export default Skills;
