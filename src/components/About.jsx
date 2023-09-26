import React from "react";
import { contact, about } from '../constants';
import { TypeAnimation } from "react-type-animation";

const About = () => {
    return (
        <div className='relative flex flex-col w-full mx-auto py-16 bg-primary-100'>

            <div className="flex justify-end pr-[8%]">
                <p className="font-title font-light text-lg md:text-xl">ABOUT ME</p>
            </div>

            <span className="relative flex items-stretch mx-[8%] mb-8 pt-10 h-3 md:h-5 bg-primary-200 opacity-80"/>

            <ul className="list-none flex flex-col xl:flex-row justify-between px-[13%] py-10 xl:space-x-16">
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

            <ul className="list-none flex justify-center space-x-6 md:space-x-16 py-10 md:py-[4rem]">
                {contact.map((site) => (
                    <li key={site.id}>
                        <span className="relative flex justify-center items-center h-8 w-8 md:h-12 md:w-12">
                            <span className="animate-ping absolute inline-flex h-5 w-5 md:h-8 md:w-8 rounded-full bg-primary-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-8 w-8 md:h-12 md:w-12 bg-primary-100">
                                <a href={site.link} target="_blank">
                                    <img 
                                        src={site.icon2} alt={site.id}
                                        onMouseOver={e => (e.currentTarget.src = site.icon1)}
                                        onMouseOut={e => (e.currentTarget.src = site.icon2)}
                                    />
                                </a>
                            </span>
                        </span>
                    </li>
                ))}
            </ul>

            <div className="px-[13%] pt-10 xl:pt-0">
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
            </div>

            

        </div>
    )
}

export default About