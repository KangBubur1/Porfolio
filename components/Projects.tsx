"use client"
import useSectionInView from "@/hooks/useSectionInView";
import SectionHeader from "./SectionHeader";
import CardProjects  from "./CardProjects";


const Projects = () => {
    const { ref } = useSectionInView("Learning");
    return(
        <section    
                className="flex flex-col xl:container  px-4 mt-12 md:mt-48 text-center scroll-mt-24 md:scroll-mt-12 " 
                id="learning" 
                ref={ref}>
            <div>
                <SectionHeader name="Learnings"/>
            </div>

            {/* Learing Layout Cards */}
            <div className="grid grid-cols-1 xl:grid-cols-2   sm:p-2   ">

               <div>
                    <CardProjects 
                                imgSrc="/Images/HF_1.png" 
                                title="Healthy Food" 
                                tags="HTML | CSS | Bootstrap5 | PHP" 
                                text="A simple web for employee management" 
                                href="https://github.com/KangBubur1/karyawan"/>
               </div>

               <div>
                    <CardProjects 
                                imgSrc="/Images/BH.png" 
                                title="BookHub" 
                                tags="Kotlin | PHP" 
                                text="Library app for User and Admin, with a function Create Read Update Delete" 
                                href="https://github.com/KangBubur1/uas_mobile"/>
               </div>

               
               <div>
                    <CardProjects 
                                imgSrc="/Images/image.png" 
                                title="Spotify Clone" 
                                tags="NextJS | Supabase | TailwindCSS | Stripe" 
                                text="Learning how NextJS works even further, with tutorial. Credits To Code With Antonio" 
                                href="https://github.com/KangBubur1/spotify-clone"/>
               </div>
               
               <div>
                    <CardProjects 
                                imgSrc="/Images/swish2.jpg" 
                                title="Swish" 
                                tags="HTML | CSS " 
                                text="Learning to style a E-commerce website for shoes" 
                                href="https://github.com/KangBubur1/Swish"/>
               </div>

               
               <div>
                    <CardProjects 
                                imgSrc="/Images/fd.jpg" 
                                title="Face Detection" 
                                tags="NextJS | Firebase | API" 
                                text="A web attendance with face detection for employee and An admin panel management. " 
                                href="https://github.com/KangBubur1/Face_detection"/>
               </div>
               
               
               
            </div>
           

            
        </section>
    )
}

export default Projects;