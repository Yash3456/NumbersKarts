import React, { Component } from 'react'
import "./Discfile.css";
import Storecard from '../Storecard/Storecard';
import img from "../../assests/contact.jpg"




class Discfile extends Component {



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
      <div className="disc-wrapper">
       <div className="discfile-heading">
            <h1 className='primaryText'>Today's Offer</h1>
            <p className='secondarytext'>VIP MOBILE NUMBERS EXCLUSIVE OFFERS ONLY AT NUMBER WALLAH</p>
        </div>
      <div className="discfile-container">
        

        <div className='d-left'>
          {
            this.state.Users.map(() => (
              <Storecard  />
            )
            )
          }
        </div>
        <div className="d-right ">
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <div className="image-container">
                <img src={img} alt="" />
            </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Discfile;