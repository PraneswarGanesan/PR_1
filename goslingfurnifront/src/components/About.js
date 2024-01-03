import React from 'react'
import '../styles/About.css';
import Navbar from './Navbar';
import Footer from './Footer';
import pinkGreenPlant from '../assets/furni-1.jpeg';
import pinkPlant from '../assets/furni-4.jpeg';
import   sea from '../assets/furni-5.jpeg';
import cloud from '../assets/furni-3.jpeg';
import bottle from '../assets/furni-6.jpeg';  
import backVideo from '../assets/back.mp4';
function About() {
  return (
    <div>
     <Navbar />

     <div className="main-content">
      <div className='main-lol'>
        <h2 id="lol-about">About us:</h2>
        <p id='gosling'>Goslingfurni</p>

      </div>
        <div className="hero">
          <div id="anim2" className="sustain">
            <h5>01.</h5>
            <h2>Sustainability</h2>
            <p>Lorem, ipsum dolor sit amet</p>
            <div className="susimagewrapper">
              <img src={pinkGreenPlant} alt="no-image" />
            </div>
          </div>

          <div id="anim2" className="ephemeral">
            <div id="imgtext">
              <img id="distortImage" src={pinkPlant} alt="no-image" />
              <p>
                2.Commited to Sustainability and Eco-Friendly choices for a better tomorrow
              </p>
            </div>
          </div>
        </div>

        <div className="motive">
          <h3>Our Motive</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint voluptatum vel
            voluptatibus beatae excepturi unde accusamus repellendus porro, nihil explicabo.
            Dignissimos nulla laborum, consequatur fugiat commodi repellendus. Placeat, eum
            delectus.
          </p>
        </div>


        <div className="pictures">
          <div id="firstpic">
            <div id="picimg">
              <img src={sea} alt="no-image" />
            </div>
            <h1>Synergy</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div id="secpic">
            <div id="picimg">
              <img src={cloud} alt="no-image" />
            </div>
            <h1>Synergy</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>


        <div className="banner">
          <div id="bimg">
            <img src={bottle} alt="no-image" />
          </div>
          <div id="btxt">
            <h1>Biodegradable</h1>
            <h1>Packaging</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        
        <div id="future">
          <video src={backVideo} autoPlay muted loop></video>
          <div id="ftext">
            <h1>Think of the future</h1>
            <button>Join Premium</button>
          </div>
        </div>
        

      </div>
  <Footer />

    </div>
  )
}

export default About