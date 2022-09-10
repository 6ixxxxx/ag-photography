import React from 'react'
import "./AboutStyles.css"
import bioPic from '../assets/BioPic.jpg'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about--text'>
          <div className='about--card'>
            
            <h1>The Team</h1>

            <img src={bioPic} className="about--img"/>

                <h4>Augustine Obumneme Eziekwu</h4> 
                  <h6>Lead Photographer</h6> 
          </div>

          <h4>Bio</h4> 

        <p>
              Hi, My name is Augustine, 
              <br /> A Nigerian based photographer that takes great delight in capturing the genuine character and soul of the subjects and people I capture.
              <br />
              Born and raised in Enugu state. 
              Photography started out as a hobby with phones and then I decided to go pro. 

              I pay close attention to the details and this helps me to create exceptional images. 
              <br />
              Thanks for stopping by and I’m hoping we work together.
        </p>
      </div>
    </div>
  )
}

export default About