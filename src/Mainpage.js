import React from 'react'
import "./Mainpage.css"
import Vector from "./Vector.png"
import Pickup from './Pickup'
import wapp from "./wapp.jpg"
import call from "./call.png"

import video1 from "./video1.mp4"
const Mainpage = () => {
    return (
        <div className='header'>
        <div className='Navbar'>
        <video autoPlay loop muted>
        <source src= {video1} type="video/mp4">
        </source>
        </video>

        <img src={Vector}
        alt= "logo"
        style={{height:'55px', padding: '3% 0% 0% 5%'}}/>
        <p>ROYAL SMART <br /> LIMOUSINE</p>
        <div className='navBar'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Fleet</li>
                <li>News & Events</li>
                <li>Be a Partner</li>
                <li>Contact</li>
                <button className='online-btn'>
                    BOOK ONLINE
                </button>
            </ul>
        </div>
        <Pickup />
        </div>
        <div className='icon'>
        <img src={wapp}
        alt="whatsapp"
        style={{height: '80px' , padding: '3% 0% 0% 5%'}}/>
        </div>
        <div className='icona'>
        <img src={call}
        alt="call"
        style={{height: '70px' , padding: '2% 0% 0% 20%'}}/>
        </div>
       </div>
    )
}
export default Mainpage;