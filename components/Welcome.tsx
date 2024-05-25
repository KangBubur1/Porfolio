import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion"; 

import BlinkingInput from "./BlinkingInput";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

interface WelcomeProps {
    setName: (name: string) => void;
}

const Welcome: React.FC<WelcomeProps> = ({ setName }) => {
    const router = useRouter();

    const [visitorName, setVisitorName] = useState("");
    const [showButton, setShowButton] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setVisitorName(inputValue);
        setShowButton(inputValue.trim() !== "");
    }

    const handleSubmit = () => {
        console.log("Setting name to:", visitorName);
        setLoading(true);
        setName(visitorName);
        router.push(`/Landing?name=${visitorName}`);
    }

    return (
        <section className="flex flex-col items-center bg-black w-full">
            <div className="!text-white items-center p-4 justify-center">
                <TextGenerateEffect words="Hello! Welcome to my Portfolio, Please enter your name" className=""/>
            </div>

            <div className="!text-white items-center mb-8">
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
                            className="px-2 py-1 sm:px-6 sm:py-3 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-lg hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex items-center">
                                    <svg
                                        className="animate-spin h-5 w-5 mr-3"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C6.37 0 0 6.37 0 12h4zM2 14.9A10.97 10.97 0 010 12H-2C-2 16.52 1.48 20.43 5 21.9l1-1.8z"
                                        ></path>
                                    </svg>
                                    Loading...
                                </div>
                            ) : (
                                "Let's go!"
                            )}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default Welcome;
