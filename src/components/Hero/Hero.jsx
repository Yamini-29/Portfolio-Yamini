import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.svg'
const Hero = () => {
  return (
    <div className='Hero'>
        
        <h1><span>I'm Yamini Shree,</span>Frontend Developer</h1>
        <p>Im Yamini Shree ,Computer science engineer from Indian Institute of Technology,Tirupati , has hands on Experience in Amazon India,TestAIng solutions,Photon Ecademy</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero
