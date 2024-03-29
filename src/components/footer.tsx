import React from 'react';
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { LuCopyright } from "react-icons/lu";


const Footer = () => {
    return (
        <footer>
            <div className="about-company">
                <img src="log" alt="logo" />
                <p>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
            </div>
            <nav className="product">
                <ul>
                    <li><strong>Product</strong></li>
                    <li>Overview</li>
                    <li>Pricing</li>
                    <li>ustumer stories </li>
                </ul>
            </nav>
            <nav className="rosources">
                <ul>
                    <li><strong>Resources</strong></li>
                    <li>Blog</li>
                    <li>Guides & tutorials</li>
                    <li>Help center</li>
                </ul>
            </nav>
            <nav className="company">
                <ul>
                    <li><strong>Company</strong></li>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Media kit</li>
                </ul>
            </nav>
            <div className="callToAction">
                <h3>Try It Today</h3>
                <p>Get started for free.
                    Add your whole team as your needs grow.</p>
                <button className="bt-start-today"><a href="#">Start Today <IoArrowForwardOutline /></a></button>
            </div>
            <div className='copyright'>
                <nav className='about'>
                    <ul>
                        <li><AiOutlineGlobal />English</li>
                        <li>Terms & privacy</li>
                        <li>Security</li>
                        <li>Status</li>
                        <li><LuCopyright/>2021 Whitespace LLC.</li>
                    </ul>
                </nav>
                <div className='social-media'>
                    <IoLogoTwitter />
                    <RiInstagramFill />
                    <FaFacebook />
                </div>
            </div>
        </footer>
    )
}
export default Footer;