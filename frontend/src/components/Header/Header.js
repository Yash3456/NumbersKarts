import React, { useState } from 'react'
import "./Header.css"
import { BiMenuAltRight } from "react-icons/bi"
import logodesign from "../../assests/svglogo.png";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(true);
    const getMenuStyles = (menuOpened) => {
        
        if (document.documentElement.clientWidth <= 800) {
            
            return { right: !menuOpened && "10%" }
        }
    }
    return (
        <section className='h-wrapper'>
            <div className="flexCenter h-container paddings innerWidth">
                <img src={logodesign} alt="logo"/>
                    <div className="h-menu flexCenter"
                        style={getMenuStyles(menuOpened)}
                    >
                        <a href="/"> Home </a>
                        <a href="/store">Store</a>
                        <a href="/discount">Discount Zone</a>
                        <a href="/contact">Contact Us</a>
                        <a href="/cart">My Cart</a>
                        <button className='button'>
                            <a href="/signin">Sign Up</a>
                        </button>

                    </div>
                
                <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>

            </div>
        </section>
    )
}

export default Header
