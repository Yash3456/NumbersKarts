import React from "react";
import "./Cart.css";
import Fading from "../storecarousal/storecar";
import { test } from "../../data";
import swal from "sweetalert";
import svgfile from "../../assests/emptycart.svg";

const Addtocart = ({id,number,cost}) => {
  let ind = test.some(current=> current.id === id);

  if (ind === true) {
    swal("", "Number is already in the cart", "warning");
  } else {
    test.push({id,number,cost});
    swal("", "Number Added to cart", "success");
    console.log(test);
  }
};

const Cart = () => {

  const arrays = [];

  if (test === null) {
    return (
      <>
        <Fading />
        <div className="Cartmain">
          <h1 className="cartheading">Order Summary</h1>
          <div className="cartcontainer">
            <div className="cartcard">
              <div className="cardsec">
              
              </div>
              <div className="paysec">
                <h3 className="payhead"> Order Summary</h3>
                <p className="amount">
                  Amount: <span>{}</span>{" "}
                </p>
                <p className="total">
                  Total: <span></span>
                </p>

                <button className="payment button">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {

    var i;

    for (i = 0; i < test.length; i++) {

      if (arrays.length < 1) {
        arrays.push(test[i]);
        
      }

      let part = test[i].id;

      let exist = arrays.some(item => item.id === part);

      if (exist === false) {
        arrays.push(test[i]);
      }
    }
    
    return (
      <>
        <Fading />
        <div className="Cartmain">
          <h1 className="cartheading primaryText">Order Summary</h1>
          <div className="cartcontainer">
            <div className="cartcard">
              <div className="cardsec">
                {arrays.length === 0 ? 
                <img src={svgfile} alt="testig" />
                :
                arrays.map((product) => {
  
                  return (
                    <div className="product-details">
                    <h5 key={product.id}
                      className="orangeText">{product.cost}</h5>
                      <h3 key={product.id} className="secondaryText">{product.number} </h3>
                      
                    </div>
                  );
                })
                }
              </div>
              <div className="paysec">
                <h3 className="payhead orangeText"> Order Summary</h3>
                <p className="amount ">
                  Amount: <span>{}</span>{""}
                </p>
                <p className="total ">
                  Total: <span></span>
                </p>

                <button className="payment button">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};



export { Cart, Addtocart };