import { ActiveSectionContext } from "@/context/ActiveSection";
import { useContext } from "react";

const useActiveSectionContext = () => {
    const context = useContext(ActiveSectionContext);

    if (context === null){
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }

    return context;
}

export default useActiveSectionContext;