import { motion } from "framer-motion";
import { staggerContainer } from "../constants/motion";

const Wrapper = (Component, idname) => function Hoc() {
    return (
        <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className="bg-primary-100 px-[8%] pb-24 xl:pb-32"
        >
            <span className='hash-span pt-20' id={idname}>
                &nbsp;
            </span>
            <Component />
        </motion.section>
    )
}

export default Wrapper