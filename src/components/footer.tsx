import { MdKeyboardArrowDown } from "react-icons/md";
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="about-company">
                <img src="log" alt="logo" />
                <p>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
            </div>
            <nav>
                <ul>
                    <li><strong>Product</strong></li>
                    <li>Overview</li>
                    <li>Pricing</li>
                    <li>ustumer stories </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li><strong>Resources</strong></li>
                    <li>Blog</li>
                    <li>Guides & tutorials</li>
                    <li>Help center</li>
                </ul>
            </nav>
            <nav>
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
                <button className="bt-start-today"><a href="#">Start Today</a></button>
            </div>

        </footer>
    )
}
export default Footer;