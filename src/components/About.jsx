import React from "react";
import { contact } from '../constants';

const About = () => {
    return (
        <section className='About relative w-full h-screen mx-auto bg-primary-100'>

            <ul className="list-none flex justify-center space-x-6">
                {contact.map((site) => (
                    <li key={site.id}>
                        <span class="relative flex justify-center items-center h-8 w-8 md:h-12 md:w-12">
                            <span class="animate-ping absolute inline-flex h-5 w-5 md:h-8 md:w-8 rounded-full bg-primary-500 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-8 w-8 md:h-12 md:w-12 bg-primary-100">
                                <a href={site.link} target="_blank">
                                    <img 
                                        src={site.icon1} alt={site.id}
                                        onMouseOver={e => (e.currentTarget.src = site.icon2)}
                                        onMouseOut={e => (e.currentTarget.src = site.icon1)}
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