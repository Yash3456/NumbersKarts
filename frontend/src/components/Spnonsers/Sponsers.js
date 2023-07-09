import React from 'react'
import "./Sponsers.css"
import img1 from "./images/logo-coca-cola.png";
import img2 from "./images/logo-oppo.png";
import img3 from "./images/logo-godrej.png";
import img4 from "./images/logo-paypal.png";
import img5 from "./images/prologis.png";
import img6 from "./images/realty.png";
import img7 from "./images/tower.png";
import img8 from "./images/equinix.png";

const Sponsers = () => {
    
    return (

        <section className="s-eventWrapper">
            <section className='flexColStart s-heading'>
                <span className='orangeText'>Our Sponsers </span>

                <span className='secondaryText'>
                    We always ready to provide the best services <br />
                    We provide You your lovable number through which you can call your loved one's.
                </span>
            </section>
            <div className="paddings innerWidth flexCenter s-container">
                <img alt='sponer6'
                    src={img1}/>
                <img src={img2} alt="sponser0" />
                <img src={img3} alt="sponser8" />
                <img src={img4} alt="sponser9" />
            </div>
            <div className="paddings innerWidth flexCenter s-container">
                <img src={img5} alt="sponser1" />
                <img src={img6} alt="image2" />
                <img src={img7} alt="image3" />
                <img src={img8} alt="image4" />
            </div>
        </section>
    )
}

export default Sponsers
