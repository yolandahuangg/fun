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

            <motion.span 
                className="relative flex items-stretch mb-8 pt-10 h-3 md:h-5 bg-transparent border-y-[1px] border-primary-400"
                variants={fadeIn('left', 'spring', 0.3, 1.5)}>
            </motion.span>
            
        </div>
    )
}

export default Wrapper(Contact, "contact")