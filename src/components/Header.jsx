import React from 'react';
import SplashCanvas from './Splash';

const Header = () => {
    return (
        <section className='relative w-full h-screen mx-auto bg-primary-100'>

            <div>
                <p className='absolute top-[8%] pl-[6%] font-title text-primary-400'>01.</p>
                <p className='absolute top-[11%] pl-[8%] font-sub text-[10px] md:text-sm'><q>
                    if you look the right way, <br/>
                    you can see that <br/>
                    the whole world is a garden.
                </q></p>

                <p className='absolute top-[25%] pl-[6%] font-title text-primary-400'>02.</p>
                <p className='absolute top-[28%] pl-[8%] font-sub text-[10px] md:text-sm'>
                    if &#40; sad&#40; &#41; === true &#41; &#123; <br/>
                    &nbsp; &nbsp; sad&#40; &#41;.stop&#40; &#41; ; <br/>
                    &nbsp; &nbsp; eatAlot&#40; &#41; ; <br/>
                    &nbsp; &nbsp; drinkMilkTea&#40; &#41; ; <br/>
                    &#125;
                </p>

                <p className='absolute top-[62%] pl-[6%] font-sub text-sm md:text-md text-primary-400'>SOFTWARE DEVELOPER & DESIGNER</p>
                <p className='absolute top-[66%] pl-[6%] font-title font-light text-[55px] md:text-[80px]'>Yolanda Huang.</p>
            </div>

            <SplashCanvas />
        </section>
    )
}

export default Header