"use server"

import getErrorMessage from "@/helper/getErrorMessage";
import validateString from "@/lib/utils";
import { Resend } from "resend"
import React from "react";
import ContactFormEmail from "@/emails/contactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);


const sendEmail = async (formData: FormData) => {
    const message = formData.get('message');
    const senderEmail = formData.get('senderEmail');

    // simple server side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email"
        }
    }

    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message"
        }
    }

    
    let data;

    try {
        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: 's32210075@student.ubm.ac.id',
            subject: "Message from contact form",
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            })
            
            
           
         });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        };
    }

    return {
        data
    };
}

export default sendEmail;
