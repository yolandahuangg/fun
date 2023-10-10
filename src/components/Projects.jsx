import React from "react";
import { motion } from 'framer-motion';

import Wrapper from './SectionWrap';
import { fadeIn, textVariant } from '../constants/motion';
import resume from '../assets/Resume2023.pdf';

const Projects = () => {
    return (
        <div className='relative flex flex-col w-full mx-auto'>
            
            <motion.p variants={textVariant()} className="font-sub text-sm md:text-md text-primary-400">I ENJOY WORKING WITH:</motion.p>

            <marquee scrollamount="12" className="font-text font-extralight border-b-[1px] border-primary-500 text-lg bg-primary-200">
                ⬩ Javascript ⬩ React ⬩ Node.js ⬩ Express.js ⬩ Three.js ⬩ Tailwind CSS ⬩ 
                Typscript ⬩ Python ⬩ C/C++ ⬩ C# ⬩ Scala ⬩ Kotlin ⬩ SQL ⬩ HTML ⬩ OpenCV ⬩ Unity ⬩ Figma ⬩
            </marquee>

            <div className="flex flex-col xl:flex-row justify-between mt-6 md:mt-10 space-y-6 md:space-y-10 xl:space-y-0">

                <motion.div variants={fadeIn('right', 'spring', 0.5, 1.5)} className='group flex h-20 md:h-40 xl:w-40 justify-center items-center'>
                    <span className="absolute inline-flex rounded-full h-20 w-20 md:h-40 md:w-40 bg-transparent border-[1px] md:border-2 border-primary-400 transition ease-in-out delay-100 group-hover:bg-primary-400 opacity-60" />
                    <p className='relative font-text font-extralight text-lg md:text-[55px] rotate-90 xl:rotate-0 transition ease-in-out delay-100 group-hover:text-primary-100'>➛</p>
                </motion.div>

                <motion.div className="flex flex-col xl:flex-row justify-end space-y-6 xl:space-y-0" variants={fadeIn('', 'spring', 0.8, 1.5)}>
                    <button
                        className="font-text font-thin text-lg md:text-[45px] border-[1px] md:border-2 border-primary-400 rounded-full w-full xl:w-80 hover:bg-primary-400 opacity-60 transition ease-in-out delay-100 hover:text-primary-100"
                        onClick={() => window.open(resume, "_blank")}
                    >RESUME</button>

                    <button
                        className="font-text font-thin text-lg md:text-[45px] border-[1px] md:border-2 border-primary-400 rounded-full w-full xl:w-[40rem] hover:bg-primary-400 opacity-60 transition ease-in-out delay-100 hover:text-primary-100"
                        onClick={() => window.open("https://drive.google.com/file/d/1yL7f4t5I0tIHK_8zrqnmolO7PGooX_TH/view?usp=drive_link", "_blank")}
                    >DESIGN PORTFOLIO</button>
                </motion.div>

            </div>

            

        </div>
    )
}

export default Wrapper(Projects, 'projects')