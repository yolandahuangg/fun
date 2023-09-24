import React from 'react';
//import ComputerCanvas from './Computer';

const Header = () => {
    return (
        <section className='relative w-full h-screen mx-auto bg-primary-100'>
            
            <p className='relative pl-[6%] top-[8%] font-title text-primary-400'>01.</p>
            <p className='relative pl-[8%] top-[8%] font-sub text-[10px] md:text-sm'><q>
                if you look the right way, <br/>
                you can see that <br/>
                the whole world is a garden.
            </q></p>

            <p className='relative top-[13%] pl-[6%] font-title text-primary-400'>02.</p>
            <p className='relative top-[13%] pl-[8%] font-sub text-[10px] md:text-sm'>
                if &#40; sad&#40; &#41; === true &#41; &#123; <br/>
                &nbsp; &nbsp; sad&#40; &#41;.stop&#40; &#41; ; <br/>
                &nbsp; &nbsp; eatAlot&#40; &#41; ; <br/>
                &nbsp; &nbsp; drinkMilkTea&#40; &#41; ; <br/>
                &#125;
            </p>

            <p className='relative top-[40%] pl-[6%] font-sub text-sm md:text-md text-primary-400'>SOFTWARE DEVELOPER & DESIGNER</p>
            <p className='relative top-[40%] pl-[6%] font-title font-medium text-[55px] md:text-[80px]'>Yolanda Huang.</p>

            {/* <ComputerCanvas /> */}

        </section>
    )
}

export default Header