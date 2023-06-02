import React from "react";
import "./Cart.css";
import Fading from "../storecarousal/storecar";

const test = [];

const Addtocart = (item) => {
  let ind = false;

  if (test.length > 0) {
    ind = test.find((current) => current.postss.id === item.postss.id);
  }
  if (ind === true) {
    alert("Number is Added");
  } else {
    test.push(item);
    sessionStorage.setItem("fav", JSON.stringify(test));
    console.log(test);
  }
};

const Cart = () => {

  const arrays = [];

  const pre = JSON.parse(sessionStorage.getItem("fav"));

  if (pre === null) {
    return (
      <>
        <Fading />
        <div className="Cartmain">
          <h1 className="cartheading">Order Summary</h1>
          <div className="cartcontainer">
            <div className="cartcard">
              <div className="cardsec">
                {/*bas yha pe ake image dalni ha */}
              </div>
              <div className="paysec">
                <h3 className="payhead"> Order Summary</h3>
                <p className="amount">
                  Amount: <span>{ }</span>{" "}
                </p>
                <p className="total">
                  Total: <span></span>
                </p>

                <button className="payment">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {

    var i;

    for (i = 0; i < pre.length; i++) {

      if (arrays.length < 1) {
        arrays.push(pre[i].postss);
      }

      let part = pre[i].postss.id;

      let exist = arrays.some(item => item.id === part);

      if (exist === false) {
        arrays.push(pre[i].postss);
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
                {arrays.map((product) => {
                  return (
                    <div className="product-details">
                    <h5 key={product.id}
                      className="orangeText">{product.id}.</h5>
                      <h3 key={product.id} className="secondaryText">{product.title} </h3>
                      
                    </div>
                  );
                })
                }
              </div>
              <div className="paysec">
                <h3 className="payhead orangeText"> Order Summary</h3>
                <p className="amount ">
                  Amount: <span>{ }</span>{" "}
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