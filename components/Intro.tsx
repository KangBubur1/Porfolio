"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Foto from "../public/Images/Foto.jpg"
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import useSectionInView from "@/hooks/useSectionInView";
import SectionHeader from "./SectionHeader";
import { useSearchParams } from "next/navigation";


const Intro = () => {
    const { ref } = useSectionInView("Home")
    const searchParams = useSearchParams();
    var name = searchParams.get('name');
    console.log("Landing received name:", name); 
    return (
        <motion.section 
                id="home"
                className="xl:container mt-12 md:mt-0 pt-12  md:pt-36  mx-4 scroll-mt-24 md:scroll-mt-12"
                ref = {ref}
                initial={{ y: 100, x: "0", opacity: 0}}
                animate={{ y: 0, x: "0", opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
                >

            {/* Top Section */}
            <div className="flex flex-col md:flex-row  mb-8">
                 {/* Left Section */}
                <div className="flex flex-col p-2 md:flex-1  mb-4 md:mb-0  ">
                    <div className=" mb-4">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-4 ">Hello, {name}.</h1>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 md:mb-16">My name is Daniel Alexander</h2>
                    </div>
                    
                    <div className="flex flex-row space-x-2 justify-center ">
                        <a
                        href="/cv.pdf"
                        download={true}
                        className="
                            mt-4
                            mb-4
                            group
                            flex
                            mx-1
                            px-7
                            py-3
                            items-center
                            rounded-full
                            focus:scale-110
                            hover:scale-110
                            active:scale-105
                            transition
                            cursor-pointer
                        "
                    >
                        Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                    </a>
                    <a
                    href="https://www.linkedin.com/in/danielalexan/"
                    target="_blank"
                    className="
                        mt-4
                        mb-4
                        flex
                        p-5
                        text-gray
                        items-center
                        gap-2
                        rounded-full
                        focus:scale-[1.15]
                        hover:scale-[1.3]
                        active:scale-105
                        transition
                        cursor-pointer
                    "
                >
                    <BsLinkedin />
                </a>
                <a
                    href="https://github.com/KangBubur1"
                    target="_blank"
                    className="
                        mt-4
                        mb-4
                        flex
                        p-5
                        text-gray
                        items-center
                        gap-2
                        text-[1.35rem]
                        rounded-full
                        focus:scale-[1.15]
                        hover:scale-[1.3]
                        active:scale-105
                        transition
                        cursor-pointer
                    "
                >
                    <FaGithubSquare />
                </a>
                    </div>
                    
                </div>

                {/* Right Section */}
                <div className="flex justify-center md:justify-end   p-2 ">
                    <Image
                        className="rounded-lg h-[400px] w-[300px] "
                        src={Foto}
                        width={0}
                        height={0}
                        alt="Picture of the author"/> 
                </div>
            </div>

            {/* Divider */}

           <div className="
               
                mx-auto
                bg-gray-200
                my-16
                h-16
                w-1
                rounded-full
                hidden
                md:block
                dark:bg-opacity-20
            ">

           </div>

            {/* Bottom Section */}
            <div className=" text-center  md:mt-32  px-4">
                <SectionHeader name="About Me"/>
                <p className="text-sm md:text-lg text-left font-extralight indent-8 mb-4">
                    I am an undergraduate student from Bunda Mulia University. Currently, I am in my 3rd year majoring in Computer Science. I have a strong interest in exploring new things in technology because I believe it will play a significant role in everyday life. I have acquired many skills by spending my free time watching YouTube tutorials and practicing what I have learned.
                </p>
                <p className="text-sm md:text-lg text-left font-extralight  indent-8 mb-4">
                    Passionate about becoming a Mobile Developer and Full-stack Developer. I enjoy working on projects that involve both front-end and back-end development, and I am always eager to learn and implement new technologies.
                </p>
            </div>    

        </motion.section>
    );
}

export default Intro;
