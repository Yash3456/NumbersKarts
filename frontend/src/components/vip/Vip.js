import React from 'react'
import "./Vip.css"
import Card from '../Storecard/Storecard'
const Vip = () => {
  return (
    <div className='vip-container'>
      <div className="vip-heading">
        <h1 className='orangeText' >MARKETING NUMBER</h1>
        <p className='secondaryText'>You can start browsing Your VIP number from our Website</p>

      </div>
      <div className="vip-card-conatiner">
        <div className="vip-row">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        {/* <div className="vip-row">
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div className="vip-row">
            <Card/>
            <Card/>
            <Card/>
        </div> */}
      </div>
    </div>
  )
}

export default Vip
