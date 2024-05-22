import Education from "@/components/Education";
import Aside from "@/components/Aside";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const Landing = () => {

    return (
        <Aside>
            <Intro />
            <Skills />
            <Education />
            <Projects/>
            <Contact/>
            <Footer/>
        </Aside>
    );
}

export default Landing;
