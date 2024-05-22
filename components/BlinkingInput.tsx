"use client";

import { useEffect } from "react";

interface BlinkingInputProps {
    id: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BlinkingInput: React.FC<BlinkingInputProps> = ({
    id,
    value,
    onChange
}) => {
    useEffect(() => {
        const startBlinking = () => {
            const intervalBlinking = setInterval(() => {
                const input = document.getElementById(id) as HTMLInputElement;
                if (input) {
                    input.focus();
                }
            }, 1000);

            return () => clearInterval(intervalBlinking);
        };

        const delay = setTimeout(startBlinking, 1500); 

        return () => clearTimeout(delay);
    }, [id]);

    return (
        <input
            type="text"
            id={id}
            value={value}
            onChange={onChange}
            autoComplete="off"
            className="border-none outline-none bg-transparent focus:ring-0 text-center"
        />
    );
}

export default BlinkingInput;
