import { FaPaperPlane } from "react-icons/fa";

import { useFormStatus} from "react-dom";


const SubmitButton = () => {
    const { pending } = useFormStatus();

    return(
        <button className="group  flex items-center justify-center gap-2 h-[3rem] w-[8rem]  text-white rounded-full outline-none transition-all focus:scale-110
                hover:scale-110
                active:scale-105
                disabled:scale-100
                disabled:bg-opacity-65
                "
                disabled={pending} 
                type="submit">{
                    pending ? <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div> : (
                        <>
                            Submit{" "}
                            <FaPaperPlane
                                className="
                                    text-xs
                                    opacity-70
                                    transition-all
                                    gorup-hover:translate-x-1
                                    group-hover:-translate-y-1
                                "
                            />{" "}
                        </>
                    )
                }
        </button>
    )
}

export default SubmitButton;