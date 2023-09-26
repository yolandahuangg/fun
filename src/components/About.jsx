import React from "react";
import { contact, about } from '../constants';

const About = () => {
    return (
        <section className='relative flex flex-col w-full h-screen mx-auto bg-primary-100'>

            <div className="flex justify-end pr-[8%] py-10">
                <p className="font-title font-light text-lg md:text-xl">ABOUT ME</p>
            </div>

            <span className="relative flex items-stretch mx-[8%] h-5 bg-primary-200 opacity-80"/>

            <ul className="list-none flex justify-between px-[13%] py-10 md:space-x-16">
                {about.map((fact) => (
                    <li key={fact.num}>
                        <ul className="list-none flex flex-col justify-start w-[15rem]">
                            {fact.info.map((line) => (
                                <li key={line}>
                                    <p className="font-text text-base">{`${line}`}</p>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <div className="px-[13%] py-10">
                <p className="font-sub text-sm md:text-md text-primary-400">LET'S CONNECT!</p>
                <p className="font-title font-light text-[40px] pt-2">I am always interested in:</p>
            </div>

            <ul className="list-none flex justify-center space-x-6 md:space-x-16 pt-[6rem]">
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

        </section>
    )
}

export default About