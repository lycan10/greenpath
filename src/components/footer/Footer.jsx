import React from 'react'
import './footer.css'
import logo from '../../assets/Green-Path-Inverse.png'
import { Link } from 'react-router-dom'
import { AiFillTwitterSquare, AiFillFacebook, AiFillLinkedin} from "react-icons/ai";
const Footer = () => {
    const date = new Date();
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-top'>
            <div className='footer-image'>
                <img src={logo} alt='company-logo'/>
            </div>
                <div className='footer-company'>
                <h1>Company</h1>
                <ul>
                    <li>
                        <Link className='footer-link-cta' to='/'><span>About us</span></Link>
                    </li>
                    <li>
                        <Link className='footer-link-cta' to='/'><span>Services</span></Link>
                    </li>
                    <li>
                        <Link className='footer-link-cta' to='/'><span>Investment</span></Link>
                    </li>
                    <li>
                        <Link className='footer-link-cta' to='/'><span>Contact</span></Link>
                    </li>
                    <li>
                        <Link className='footer-link-cta' to='/blog'><span>Blog</span></Link>
                    </li>
                </ul>
            </div>
            <div className='footer-contact'>
                <h1>Location</h1>
                    <p>1345 Avenue of Americas <br /> 
                    32nd Floor <br /> New York NY 10105</p>
                    <p>+1 (646) 357 3144</p>
                </div>
            <div className='footer-info'>
            <h1>General info</h1>
                <p>email-addresss</p>
                <p>Disclaimer</p>

            </div>
        </div>

        <div className='footer-bottom'>
            <p>@ {date.getFullYear()} Green Path Development</p>
            <div className='social-icon'>
                    <AiFillFacebook  className='footer-icon'/>
                    <AiFillTwitterSquare  className='footer-icon'/>
                    <AiFillLinkedin  className='footer-icon'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
