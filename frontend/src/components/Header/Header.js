import React, { useState,useContext } from 'react'
import "./Header.css"
import { Datacontext } from '../Context/Dataprovider';
import { BiMenuAltRight } from "react-icons/bi"
import logodesign from "../../assests/svglogo.png";
import {Link} from "react-router-dom";
import styled from '@emotion/styled';
import { Badge, Box, Button, Typography } from '@mui/material'
import headingtext from "../../assests/headingtext.png";
import headinglogo from "../../assests/logodesign.png";

const Loginbutton = styled(Button)`
 color:#2874f0;
 text-transform:none;
 background:#fff;
 padding:5px 25px;
 border-radius:2px;
 box-shadow:none;
 font-weight:600;
 height:32px; 
 `


const Header = () => {
    const [menuOpened, setMenuOpened] = useState(true);
    const getMenuStyles = (menuOpened) => {
        
        if (document.documentElement.clientWidth <= 800) {
            
            return { right: !menuOpened && "10%" }
        }
    }

    const [opened,setopen] = useState(false);
    const [account,setaccount] = useContext(Datacontext);
  

    return (
        <section className='h-wrapper' style={{display:"flex"}}>
            <div className="flexCenter h-container paddings innerWidth" style={{height:"82px"}}>
                 <Link to={"/"} style={{marginRight:"14%"}} ><div style={{textDecoration:"none",color:"inherit",marginBottom:"10px",display:"flex",alignItems:"center",justifyContent:"start",cursor:"pointer"}}>
                       <img src={headinglogo} alt="NumbersKart_Logo" style={{width:40,height:50}}/>
                       <img src={headingtext} alt="NumbersKart"/>
                  </div></Link>
                    <div className="h-menu flexCenter"
                        style={getMenuStyles(menuOpened)}
                    >
                        <Link to={"/"}> Home </Link>
                        <Link to={"/store"}>Store</Link>
                        <Link to={"/discount"}>Discount Zone</Link>
                        <Link to={"/contact"}>Contact Us</Link>
                        <Link to={"/cart"}>My Cart</Link>
                        <button className='button'>
                        <Link to={"/signin"}>Sign Up</Link>
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
