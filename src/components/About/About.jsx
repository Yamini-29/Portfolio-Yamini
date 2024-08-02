import React from 'react'
import './About.css'
import theme from '../../assets/theme_pattern.svg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme} alt="" />
        </div>
      <div className="about-section">
        <div className="about-left">
            <img src="" alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>
                    Im an enthusiastic Frontend Developer, who has worked in real time projects in Amazon , I did my Btech Computer Science and engineering from IIT Tirupati.

                </p>
                <p>
                    I do leetcode everyday and has a very good knowledge in DSA and competitive programming. Have worked as intern at ML and AI in TestAIng solutions. Has developed a prototype in Augmented Reality.
                </p>
            </div>
        </div>
        <div className="about-skills">
          <div className="about-skill">
            <p>HTML & CSS</p> <hr style={{ width: '50%' }} />
          </div>
          <div className="about-skill">
            <p>React Js</p> <hr style={{ width: '50%' }} />
          </div>
          <div className="about-skill">
            <p>Python</p> <hr style={{ width: '50%' }} />
          </div>
          <div className="about-skill">
            <p>Java</p> <hr style={{ width: '50%' }} />
          </div>
          <div className="about-skill">
            <p>CPP</p> <hr style={{ width: '50%' }} />
          </div>
          <div className="about-skill">
            <p>C#</p> <hr style={{ width: '50%' }} />
          </div>
          <div className="about-skill">
            <p>ML</p> <hr /><hr style={{ width: '50%' }} />
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="achievment">
          <h1>
            Amazon -Support Intern 
          </h1>
          <p>
            May-July 2023
          </p>
        </div>
        <div className="achievment">
          <h1>
            TestAIng Solutions- AI & ML intern 
          </h1>
          <p>
            June-August 2024
          </p>
        </div>
        <div className="achievment">
          <h1>
            Photon Ecademy - Project Management Executive Intern
          </h1>
          <p>
            November-January 2023-24
          </p>
        </div>
        <div className="achievment">
          <h1>
            Augmented Reality Prototype Development
          </h1>
          <p>
            Unity Project
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
