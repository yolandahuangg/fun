import React from "react";
import { motion } from 'framer-motion';

import Wrapper from './SectionWrap';
import { fadeIn, textVariant } from '../constants/motion';

const Projects = () => {
    return (
        <div className='relative flex flex-col w-full mx-auto bg-primary-100'>
            
            <div className="flex flex-col">
                <motion.p variants={textVariant()} className="font-sub text-sm md:text-md text-primary-400">I ENJOY WORKING WITH:</motion.p>
                <marquee scrollamount="12" className="border-b-[1px] border-primary-500 text-lg">
                    Javascript, React, Node.js, Express.js, Three.js, Tailwind CSS, 
                    Typscript, Python, C, C++, C#, Scala, Kotlin, SQL, HTML, OpenCV, Unity, Figma
                </marquee>
            </div>

        </div>
    )
}

export default Wrapper(Projects, 'projects')