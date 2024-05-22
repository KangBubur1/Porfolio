import Education from "@/components/Education";
import Aside from "@/components/Aside";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Suspense } from "react";

const Landing = () => {

    return (
        <Aside>
            <Suspense fallback={<div>Loading...</div>}>
                <Intro />
            </Suspense>
            <Skills />
            <Education />
            <Projects/>
            <Contact/>
            <Footer/>
        </Aside>
    );
}

export default Landing;
