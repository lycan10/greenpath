import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/GREENPATH.png'
import './navbar.css'
import { AiFillTwitterSquare, AiFillFacebook, AiFillLinkedin} from "react-icons/ai";
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <Link to='/'><img src={logo} alt='company-logo' /></Link>
            </div>
            <div className='navbar-links'>
                <ul>
                    <li>
                        <Link className='link-cta' to='/about'><span>About us</span></Link>
                    </li>
                    <li>
                        <Link className='link-cta' to='/services'><span>Services</span></Link>
                    </li>
                    <li>
                        <Link className='link-cta' to='/contact'><span>Contact</span></Link>
                    </li>
                    <li>
                        <Link className='link-cta' to='/blog'><span>Blog</span></Link>
                    </li>
                    <div className='social-icon'>
                    <AiFillFacebook  className='footer-icon'/>
                    <AiFillTwitterSquare  className='footer-icon'/>
                    <AiFillLinkedin  className='footer-icon'/>
            </div>
                </ul>

            </div>

        </div>

    </div>
  )
}

export default Navbar
