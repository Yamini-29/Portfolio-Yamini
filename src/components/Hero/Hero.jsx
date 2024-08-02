import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
    return (
        <div id='home' className='Hero'>

            <h1><span>I'm Yamini Shree,
            </span>Frontend Developer</h1>
            
            <p>Im Yamini Shree ,Computer science engineer from Indian Institute of Technology,Tirupati , has hands on Experience in Amazon India,TestAIng solutions,Photon Ecademy</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero
