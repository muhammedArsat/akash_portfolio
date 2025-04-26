import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import SectionWrapper from './SectionWrapper';
const App = () => {
    return (
        <div>
            <Navbar />
            <SectionWrapper id={"about"}>
                <About />
            </SectionWrapper>

            <SectionWrapper id={"skill"}>
                <Skills />
            </SectionWrapper>
        </div>
    );
};

export default App;
