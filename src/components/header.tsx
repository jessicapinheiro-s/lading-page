import { MdKeyboardArrowDown } from "react-icons/md";
import React from 'react';

const HeaderContainer = () => {
    return(
        <header>
            <img src="log" alt="logo" />
            <nav>
                <ul>
                    <li>Home <MdKeyboardArrowDown/></li>
                    <li>Contact Us <MdKeyboardArrowDown/></li>
                    <li>About <MdKeyboardArrowDown/></li>
                </ul>
            </nav>
            <button className="bt-login"><a href="#">Login</a></button>
            <button className="bt-free-triat"><a href="#">Try Whitespace Free</a></button>
        </header>
    )
}
export default  HeaderContainer;