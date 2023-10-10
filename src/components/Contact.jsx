import React from "react";
import { motion } from 'framer-motion';

import Wrapper from './SectionWrap';
import { fadeIn, textVariant } from '../constants/motion';

const Contact = () => {
    return (
        <div className='relative flex flex-col w-full mx-auto'>
            
            <motion.div variants={textVariant()} className="flex flex-col">
                <p className="font-sub text-sm md:text-md text-primary-400">GET IN TOUCH</p>
                <p className="font-title font-normal text-lg md:text-xl">CONTACT.</p>
            </motion.div>

            <motion.div variants={fadeIn('left', 'spring', 0.3, 1.5)}>
                <span className="relative flex items-stretch mb-4 pt-10 h-3 md:h-5 bg-transparent border-y-[1px] border-primary-400" />
                <p className="font-text text-sm md:text-base px-[8%] py-8 md:py-10">
                    Feel free to contact me anytime.
                    The easiest way to reach me is to just send me an email.
                </p>
            </motion.div>

            <motion.div 
                className="flex flex-col xl:flex-row px-[8%] space-y-4 xl:space-y-0 xl:justify-between"
                variants={fadeIn('up', 'spring', 0.6, 2.5)}
            >

                <div className="flex flex-col justify-between w-full xl:w-[22rem] h-[24rem] rounded-3xl bg-[url('../src/assets/mobile.png')]">
                    <p className="text-[40px] text-primary-100 mx-8 mt-4 border-b-[1px]">MO-</p>
                    <p className="flex font-text text-primary-100 mx-auto text-sm md:text-base">1-647-639-7928 <br /> 1-647-367-5000</p>
                    <p className="text-[40px] flex justify-end text-primary-100 mx-8 mb-4 border-t-[1px]">-BILE</p>
                </div>

                <div className="flex flex-col justify-between w-full xl:w-[22rem] h-[24rem] rounded-3xl bg-[url('../src/assets/email.png')]">
                    <p className="text-[40px] text-primary-100 mx-8 mt-4 border-b-[1px]">E-</p>
                    <a href="mailto:yolandahuang2004@gmail.com" target="_blank" rel="noreferrer" className="mx-auto">
                        <p className="flex font-text text-primary-100 text-sm md:text-base hover:underline hover:text-primary-300">yolandahuang2004@gmail.com</p>
                    </a>
                    <p className="text-[40px] flex justify-end text-primary-100 mx-8 mb-4 border-t-[1px]">-MAIL</p>
                </div>

                <div className="flex flex-col justify-between w-full xl:w-[22rem] h-[24rem] rounded-3xl bg-[url('../src/assets/social.png')]">
                    <p className="text-[40px] text-primary-100 mx-8 mt-4 border-b-[1px]">SO-</p>
                    <div className="flex flex-col">
                        <a href="https://www.linkedin.com/in/yolandahuangg/" target="_blank" rel="noreferrer" className="mx-auto">
                            <p className="flex font-text text-primary-100 text-sm md:text-base hover:underline hover:text-primary-300">linkedin</p>
                        </a>
                        <a href="https://www.instagram.com/yolandahuangg/" target="_blank" rel="noreferrer" className="mx-auto">
                            <p className="flex font-text text-primary-100 text-sm md:text-base hover:underline hover:text-primary-300">instagram</p>
                        </a>
                    </div>
                    <p className="text-[40px] flex justify-end text-primary-100 mx-8 mb-4 border-t-[1px]">-CIAL</p>
                </div>

            </motion.div>
            
        </div>
    )
}

export default Wrapper(Contact, "contact")