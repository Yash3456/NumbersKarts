import React, { Component, useState } from 'react'
import "./storefile.css";
import Storecard from '../Storecard/Storecard';

import { FaSearch } from "react-icons/fa";
// import { BiMenuAltRight } from "react-icons/bi";




class Storefile extends Component {



  constructor() {
    super();

    this.state = {
      Users: [],
      searchfield: ''
    }
  }


  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(users => this.setState({ Users: users }));
  }

  render() {
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
          <div className="filters">
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
          </div>
        </div>
        

        <div className='cardfield'>
          {
            this.state.Users.map((posts, index) => (
              <Storecard indexx={index} postss={posts} />
            )
            )
          }
        </div>

      </div>
    )
  }
}

export default Storefile;