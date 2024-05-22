"use client"

import type { SectionName } from "@/lib/types";

import { Dispatch, SetStateAction, createContext, useState } from "react";


type ActiveSectionContextProviderProps = {
    children: React.ReactNode,
}

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: Dispatch<SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: Dispatch<SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider: React.FC<ActiveSectionContextProviderProps> = ({
    children
}) => {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the obs temporarily when user click on a link


    return(
        <ActiveSectionContext.Provider value={{
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick,
        }}>
            {children}
        </ActiveSectionContext.Provider>
    )
}


export default ActiveSectionContextProvider;