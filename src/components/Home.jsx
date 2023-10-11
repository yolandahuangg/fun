import React from 'react';

import About from '../components/About';
import Contact from '../components/Contact';
import Experiences from '../components/Experiences';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <About />
            <Experiences />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home