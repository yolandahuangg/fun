import React from 'react';

import SplashCanvas from './Splash';

const Header = () => {
    return (
        <section className='relative w-full h-[95vh] mx-auto bg-primary-100'>

            <SplashCanvas />

            <div>
                <p className='absolute top-[8%] pl-[6%] font-title text-primary-400'>01.</p>
                <p className='absolute top-[11%] pl-[8%] font-text text-[10px] md:text-sm'><q>
                    If you look the right way, <br/>
                    you can see that <br/>
                    the whole world is a garden.
                </q></p>

                <p className='absolute top-[25%] pl-[6%] font-title text-primary-400'>02.</p>
                <p className='absolute top-[28%] pl-[8%] font-text text-[10px] md:text-sm'>
                    if &#40; sad&#40; &#41; === true &#41; &#123; <br/>
                    &nbsp; &nbsp; sad&#40; &#41;.stop&#40; &#41; ; <br/>
                    &nbsp; &nbsp; eatAlot&#40; &#41; ; <br/>
                    &nbsp; &nbsp; drinkMilkTea&#40; &#41; ; <br/>
                    &#125;
                </p>

                <p className='absolute top-[62%] xl:top-[66%] pl-[6%] font-sub text-sm md:text-md text-primary-400'>SOFTWARE DEVELOPER & DESIGNER</p>
                <p className='absolute top-[66%] xl:top-[70%] pl-[6%] font-title font-light text-[55px] lg:text-[85px]'>Yolanda Huang.</p>

                <div 
                    className='absolute group top-[78%] ml-[87%] flex justify-center items-center hover:cursor-pointer'
                    onClick={() => document.getElementById("about").scrollIntoView({behavior: "smooth"})}
                >
                    <span className="absolute inline-flex rounded-full h-10 w-10 lg:h-24 lg:w-24 bg-transparent border-[1px] md:border-2 border-primary-400 transition ease-in-out delay-100 group-hover:bg-primary-400 opacity-60" />
                    <p className='relative font-text font-extralight text-lg lg:text-[55px] transition ease-in-out delay-100 group-hover:text-primary-100'>↓</p>
                </div>

                <div className='absolute top-[25%] ml-[86%] flex flex-col justify-center items-center'>
                    <span className='absolute hidden xl:flex h-[15rem] w-[4px] bg-black' />  
                    <p className='relative hidden xl:flex -rotate-90 font-sub text-md text-primary-400 w-52 top-60'>I MAKE ART COME ALIVE</p>
                </div>
                <span className='absolute hidden xl:flex h-[4px] w-32 bg-black top-[83%] ml-[70%]' />
            </div>

        </section>
    )
}

export default Header