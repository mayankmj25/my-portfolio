import React from 'react'
import Me from '../../assets/me.jpeg'

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className="left">
        <div className="profile-pic">
          <img src={Me} alt='me'/>
        </div>
      </div>
      <div className="right">
        <div className='container'>
        <h1>
          Mayank  Jaiswal
        </h1>
        <span>Frontend Developer</span>
        </div>
        <div className="about-text">
        Mayank Jaiswal is a Software Developer with experience in Tekion Corp and Synaptic. He has worked on React, React Native, Typescript and Javascript specifically. In his free time, he loves to watch football.
      </div>
      <div className='roles'>
        <span onClick={() => window.open("https://github.com/mayankmj25")}>
          <i className='fa-brands fa-square-github fa-2x fa-beat' href="www.google.com">
          </i>
        </span>
        <span onClick ={() => window.open("https://www.linkedin.com/in/mayankjaiswal25")}>
        <i className="fa-brands fa-linkedin fa-2x fa-beat"></i>
        </span>
      </div>
      </div>
    </div>
  )
}

export default Home