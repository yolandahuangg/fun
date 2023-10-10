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
                <span className="relative flex items-stretch mb-8 pt-10 h-3 md:h-5 bg-transparent border-y-[1px] border-primary-400" />
                <p className="font-text text-sm md:text-base px-[8%] py-8 md:py-10">
                    Feel free to contact me anytime.
                    The easiest way to reach me is to just send me an email.
                </p>
            </motion.div>
            
        </div>
    )
}

export default Wrapper(Contact, "contact")