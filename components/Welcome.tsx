import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion"; // Import AnimatePresence from Framer Motion

import BlinkingInput from "./BlinkingInput";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

interface WelcomeProps {
    setName: (name: string) => void;
}

const Welcome: React.FC<WelcomeProps> = ({ setName }) => {
    const router = useRouter();

    const [visitorName, setVisitorName] = useState("");
    const [showButton, setShowButton] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setVisitorName(inputValue);
        setShowButton(inputValue.trim() !== "");
    }

    const handleSubmit = () => {
        console.log("Setting name to:", visitorName);
        setName(visitorName);
        router.push(`/Landing?name=${visitorName}`);
    }

    return (
        <section className="flex flex-col items-center">
            <div className="!text-white text-2xl items-center mb-12">
                <TextGenerateEffect words="Hello! Welcome to my Portfolio, Please enter your name" />
            </div>

            <div className="!text-white text-2xl items-center mb-8">
                <BlinkingInput id="visitor_name" value={visitorName} onChange={handleChange} />
            </div>

            <AnimatePresence> 
                {showButton && (
                    <motion.div 
                        key="submitButton"
                        initial={{ opacity: 0, y: 40 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: 40 }} 
                        transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
                    >
                        <button 
                            onClick={handleSubmit}
                            className="px-6 py-3 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-lg hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
                        >
                            Let's Go!
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default Welcome;
