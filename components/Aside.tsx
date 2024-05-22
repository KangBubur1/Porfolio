"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import useActiveSectionContext from "@/hooks/useActiveSectionContext";
import clsx from "clsx";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

interface AsideProps {
    children: React.ReactNode;
}

const Aside: React.FC<AsideProps> = ({ children }) => {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const updateScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        updateScreenSize();
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    const buttonVariants = {
        open: { rotate: 0, scale: 1.2 },
        closed: { rotate: 180, scale: 1 },
    };

    const navVariants = {
        open: { x: 0 },
        closed: { x: "-100%" },
    };

    return (
        <div className="flex flex-col md:flex-row">
            <motion.aside
                className="hidden md:flex flex-col w-48 h-full mt-48 items-center fixed"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
            >
                {/* Logo */}
                <div className="[writing-mode:vertical-lr] [text-orientation:upright] text-white">
                    <a href="#" className="text-4xl font-thin mt-4">
                        ダニエル
                    </a>
                </div>

                {/* Navbar */}
                <nav className="mt-10">
                    <ul className="space-y-7 text-lg text-white font-thin p-6">
                        {links.map((link) => (
                            <li key={link.hash} className="relative">
                                <Link
                                    href={link.hash}
                                    onClick={() => {
                                        setActiveSection(link.name);
                                        setTimeOfLastClick(Date.now());
                                    }}
                                    className={clsx("flex w-full px-3 transition hover:text-gray-500", {
                                        "border-l-4 border-gray-100 dark:border-blue-300 transition": activeSection === link.name,
                                    })}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </motion.aside>

            {/* Hamburger */}
            <div className="z-50 md:hidden text-white p-4  flex justify-between items-center w-full fixed bg-black/80 backdrop-blur-md">
                <motion.button
                    onClick={handleClick}
                    className="group transition-all"
                    animate={isOpen ? "open" : "closed"}
                    variants={buttonVariants}
                    transition={{ duration: 0.3 }}
                >
                    {isOpen ? <IoCloseOutline className="group w-10 h-10" /> : <RxHamburgerMenu className="group w-10 h-10" />}
                </motion.button>
                <a href="#" className="font-thin">
                    ダニエル
                </a>
            </div>

            {/* Navigation Menu */}
            {isMobile && (
                <motion.nav
                    className="fixed w-1/3 h-full bg-black z-10 flex flex-col items-center md:hidden"
                    initial={{ x: '-100%' }}
                    animate={isOpen ? "open" : "closed"}
                    variants={navVariants}
                    transition={{ duration: 0.3 }}
                >
                    <ul className="mt-24 space-y-4">
                        {links.map((link) => (
                            <li key={link.hash} className="relative text-white">
                                <Link href={link.hash}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </motion.nav>
            )}

            <main className="flex-grow flex flex-col items-center text-white md:ml-48">
                {children}
            </main>
        </div>
    );
};

export default Aside;
