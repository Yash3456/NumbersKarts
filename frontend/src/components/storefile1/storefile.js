import React from 'react'
import "./storefile.css";
import Storecard from '../Storecard/Storecard';
import {numbers} from "../../data"
import { FaSearch } from "react-icons/fa";
// import { BiMenuAltRight } from "react-icons/bi";

const Storefile = () =>{
  return (
    <div className="storefile-container">
    <div className="search-box"
      
    >
      <div className="search-box-heading">
        <h3>SEARCH OPTIONS</h3>
        <p className="secondaryText">Premium VIP Mobile Number</p>
      </div>
      <div className="search-box-box">
        <h3 className="orangeText">Numerology Search</h3>
        <div className="inner-box">
          <input type="number" placeholder="0" />
          <button className="button"><FaSearch /></button>
        </div>
      </div>
      {/* <div className="filters">
        <h3 >Categories</h3>
        <label className="filter1"><input type="checkbox" className="inputs" /> <span>xy-xy-xy-xy-xy</span></label>
        <label className="filter1"><input type="checkbox" className="inputs" /> <span>xy-xy-xy-xy-xy</span></label>
        <label className="filter1"><input type="checkbox" className="inputs" /> <span>xy-xy-xy-xy-xy</span></label>
        <label className="filter1"><input type="checkbox" className="inputs" /> <span>xy-xy-xy-xy-xy</span></label>
        <label className="filter1"><input type="checkbox" className="inputs" /> <span>xy-xy-xy-xy-xy</span></label>
        <label className="filter1"><input type="checkbox" className="inputs" /> <span>xy-xy-xy-xy-xy</span></label>
        <label className="filter1"><input type="checkbox" className="inputs" /> <span>xy-xy-xy-xy-xy</span></label>
        <label className="filter1"><input type="checkbox" className="inputs" /> <span>xy-xy-xy-xy-xy</span></label>
        <label className="filter1"><input type="checkbox" className="inputs" /> <span>xy-xy-xy-xy-xy</span></label>
        <label className="filter1"><input type="checkbox" className="inputs" /> <span>xy-xy-xy-xy-xy</span></label>
        <label className="filter1"><input type="checkbox" className="inputs" /> <span>xy-xy-xy-xy-xy</span></label>
        <label className="filter1"><input type="checkbox" className="inputs" /> <span>xy-xy-xy-xy-xy</span></label>
        <label className="filter1"><input type="checkbox" className="inputs" /> <span>xy-xy-xy-xy-xy</span></label>
        <label className="filter1"><input type="checkbox" className="inputs" /> <span>xy-xy-xy-xy-xy</span></label>
        <label className="filter1"><input type="checkbox" className="inputs" /> <span>xy-xy-xy-xy-xy</span></label>
        <label className="filter1"><input type="checkbox" className="inputs" /> <span>xy-xy-xy-xy-xy</span></label>
        <label className="filter1"><input type="checkbox" className="inputs" /> <span>xy-xy-xy-xy-xy</span></label>
        <label className="filter1"><input type="checkbox" className="inputs" /> <span>xy-xy-xy-xy-xy</span></label>
        <label className="filter1"><input type="checkbox" className="inputs" /> <span>xy-xy-xy-xy-xy</span></label>
      </div> */}
    </div>
    

    <div className='cardfield'>
      {
        numbers.map(({id,number,cost}) => (
          <Storecard  id = {id} number={number}  cost = {cost}/>
        )
        )
      }
    </div>

  </div>

  )
}

export default Storefile;