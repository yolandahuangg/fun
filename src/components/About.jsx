import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from 'framer-motion';
import { contact, about } from '../constants';
import Wrapper from './SectionWrap';
import { fadeIn, textVariant, zoomIn } from '../constants/motion';

const About = () => {
    return (
        <div className='relative flex flex-col w-full mx-auto bg-primary-100'>

            <motion.div variants={textVariant()}>
                <p className="font-title font-light text-lg md:text-xl flex justify-end">ABOUT ME.</p>
            </motion.div>

            <motion.div variants={fadeIn('', 'spring', 0.5, 1.5)}>
                <span className="relative flex items-stretch mb-8 pt-10 h-3 md:h-5 bg-primary-200 opacity-80"/>

                <ul className="list-none flex flex-col xl:flex-row justify-between px-[8%] py-10 xl:space-x-16">
                    {about.map((fact) => (
                        <li key={fact.num}>
                            <ul className="list-none flex flex-col justify-start xl:w-[15rem]">
                                {fact.info.map((line) => (
                                    <li key={line}>
                                        <p className="font-text text-sm md:text-base">{`${line}`}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </motion.div>

            <ul className="list-none flex justify-center space-x-6 md:space-x-16 py-10 md:py-[4rem]">
                {contact.map((site) => (
                    <li key={site.id}>
                        <motion.span 
                            variants={zoomIn(0.5*site.num, 1)}
                            className="relative flex justify-center items-center h-8 w-8 md:h-12 md:w-12"
                        >
                            <span className="animate-ping absolute inline-flex h-5 w-5 md:h-8 md:w-8 rounded-full bg-primary-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-8 w-8 md:h-12 md:w-12 bg-primary-100">
                                <a href={site.link} target="_blank" rel="noreferrer">
                                    <img 
                                        src={site.icon2} alt={site.id}
                                        onMouseOver={e => (e.currentTarget.src = site.icon1)}
                                        onMouseOut={e => (e.currentTarget.src = site.icon2)}
                                    />
                                </a>
                            </span>
                        </motion.span>
                    </li>
                ))}
            </ul>

            <motion.div className="pt-10 xl:pt-0" variants={fadeIn('', 'spring', 0.8, 1.5)}>
                <p className="font-sub text-sm md:text-md text-primary-400">LET'S CONNECT!</p>
                <p className="font-text text-sm md:text-md pt-2 pb-10">I am always interested in: &nbsp; &nbsp;</p>
                <TypeAnimation 
                    preRenderFirstString={true}
                    sequence = {[
                        'SOFTWARE DEVELOPMENT',
                        2500,
                        'FULL STACK DEVELOPMENT',
                        2500,
                        'UI/UX DESIGN',
                        2500,
                        'COFFEE!!!',
                        2500,
                        'WEB APPLICATIONS',
                        2500,
                        'PC AND SWITCH GAMING',
                        2500,
                        'ARTIFICIAL INTELLIGENCE',
                        2500,
                        'ROBOTICS',
                        2500,
                        'VIRTUAL REALITY',
                        2500,
                    ]}
                    speed={20}
                    className="flex font-title text-lg md:text-xl text-light text-primary-400 break-all"
                    repeat={Infinity}
                />
            </motion.div>

        </div>
    )
}

export default Wrapper(About, 'about')