"use client"

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import useActiveSectionContext from "@/hooks/useActiveSectionContext";
import clsx from "clsx";

interface AsideProps {
    children: React.ReactNode;
}

const Aside: React.FC<AsideProps> = ({ children }) => {
    const {  activeSection, setActiveSection, setTimeOfLastClick  } = useActiveSectionContext();

    return (
        <div  className="flex flex-col md:flex-row ">
            <motion.aside 
                className="hidden md:flex flex-col w-48 h-full mt-48  items-center  fixed"
                initial={{x: -100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{ ease: "easeOut", duration: 1.5 }}
                >
                {/* Logo */}
                <div className="[writing-mode:vertical-lr] [text-orientation:upright] text-white">
                    <a href="#" className="text-4xl font-thin mt-4  ">
                        ダニエル
                    </a>
                </div>

                {/* Navbar */}
                <nav className="mt-10">
                    <ul className="space-y-7 text-lg   text-white font-thin p-6">
                        {
                            links.map(link => (
                                <li
                                    key = {link.hash}
                                    className="relative"
                                >
                                    <Link
                                        href = {link.hash}
                                        onClick={() => {
                                            setActiveSection(link.name)
                                            setTimeOfLastClick(Date.now())
                                        }}
                                        className={clsx("flex w-full  px-3  transition hover:text-gray-500 ", {
                                            "border-l-4 border-gray-100 dark:border-blue-300 transition": activeSection === link.name,
                                          })}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </motion.aside>
            <nav className="md:hidden text-white p-4">
                tes
            </nav>
            <main className="flex-grow flex flex-col items-center text-white md:ml-48 ">
                {children}
            </main>
        </div>
    );
}

export default Aside;
