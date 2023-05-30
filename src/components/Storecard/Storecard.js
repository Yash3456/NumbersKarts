import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./Storecard.css"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import img1 from "../Spnonsers/images/realty.png"
const Card = (props) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div className="cards"
        
        >
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link  style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
               {/*left side */}
                <div className="card-left">
                <img src={img1} alt="" />
                </div>
                {/* right side */}
                <div className="card-right">
                    <div className="c-row">
                        <p>97554545456</p>
                        <span className="orangeText">Numerology</span>
                    </div>
                    <div className="c-row">
                        <div className="c-col orangeText">5</div>
                        <div className="c-col orangeText">4</div>
                        <div className="c-col orangeText">3</div>
                        <div className="c-col">
                            <p>SMILER</p>
                        </div>
                    </div>
                    <div className="c-row">
                        <p>$600</p>
                        <p>|</p>
                        <p>AddCard</p>
                    </div>
                </div>





                {/* overlay
                <div className="cards__overlay">
                    
                </div> */}
            </div>
        </Link>
    }
    </>
}

export default Card