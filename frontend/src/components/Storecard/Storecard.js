import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./Storecard.css"
import { Link } from "react-router-dom"
import img1 from "../Spnonsers/images/realty.png"
import { Addtocart } from "../addtocart/cart"
const Card = ({id,number,cost}) => {

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
                        <p>{number}</p>
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
                        <p>$ {cost}</p>
                        <p>|</p>
                        <p onClick={()=>{
                            Addtocart({id,number,cost})
                        }}>AddCard</p>
                    </div>
                </div>
            </div>
        </Link>
    }
    </>
}

export default Card