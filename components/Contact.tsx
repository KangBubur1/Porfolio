"use client"

import useSectionInView from "@/hooks/useSectionInView";

import { motion } from "framer-motion";
import { useRef } from "react";

import toast from "react-hot-toast";
import SectionHeader from "./SectionHeader";
import SubmitButton from "./SubmitButton";
import sendEmail from "@/actions/sendEmail";

const Contact = () => {
    const { ref } = useSectionInView("Contact");
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    return(
        <motion.section
            id="contact"
            ref={ref}
            className=" flex flex-col xl:container  px-4 mt-12 md:mt-48 text-center scroll-mt-24 md:scroll-mt-12"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            
            <div>
                <SectionHeader name="Contact"/>
            </div>
            
            <div>
                <p className="text-white  dark:text-white/80">You can contact me directly at{" "}
                    <a className="underline"  href="mailto:daniel.alexander8310@gmail.com">daniel.alexander8310@gmail.com</a>{" "}
                    or through this form.
                </p>
            </div>
            <form   
                action = {async (formData) => {
                   const{ data, error } = await sendEmail(formData);

                   if (!error) {
                    toast.success("Email sent successfully!");
                    if (emailRef.current && messageRef.current) {
                        emailRef.current.value = ' ';
                        messageRef.current.value = ' ';
                    }else {
                        toast.error("Failed to send email. Please try again later or email me manually.");
                    }
                        
                   }

                   
                }}    className="flex flex-col mt-8">
                <input 
                        ref = {emailRef}
                        className="h-14 px-4 rounded-lg  focus:outline-none transition-all text-black dark:text-white"
                        autoComplete="off"
                        name="senderEmail" 
                        type="email"
                        required
                        maxLength={500} 
                        placeholder="Your email"
                    />
                    <textarea 
                        ref = {messageRef}
                        className="h-52 my-3 rounded-lg  p-4 focus:outline-none transition-all text-black dark:text-white"
                        autoComplete="off"
                        name="message" 
                        required
                        maxLength={5000} 
                        placeholder="Your Message"    
                    />
                    <SubmitButton/>
            </form>

        </motion.section>
    )
}

export default Contact;