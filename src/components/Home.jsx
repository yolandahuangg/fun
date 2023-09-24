import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Experiences from '../components/Experiences';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <div className='Home'>
            <Navbar />
            <Header />
            <About />
        </div>
    )
}

export default Home