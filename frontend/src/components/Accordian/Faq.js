import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import "./Faq.css";
import faqimg from "../../assests/faq.jpg"
import data from "./accordion"
import { motion } from 'framer-motion';
const Faq = () => {


  const [className, setClassName] = useState(null)

  return (

    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <motion.div
          initial={{ x: '-7rem', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 4,
            type: "spring",
            
          }}
          className="f-left">
          <div
            className="image-container">
            <img src={faqimg} alt="" />
          </div>
        </motion.div>
        <div className="flexColStart f-right">
          <span className='orangeText'>Your Most asked </span>
          <span className='primaryText'>And Frequent questions.</span>
          <span className='secondaryText'>
            We always ready to provide the best services <br />
            We provide You your lovable number through which you can call your loved one's.
          </span>


          <Accordion
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}>
            {
              data.map((item, i) => {

                return (
                  <motion.div className="accordianItem-div"
                    initial={{ y: '-7rem', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 3,
                      type: "spring",
                      bounce: 0.7
                    }}
                  >
                    <AccordionItem
                      className={`accordionItem ${className}`}
                      key={i}
                      uuid={i}
                    >
                      <AccordionItemHeading>
                        <AccordionItemButton
                          className='accordionButton flexCenter'
                        >
                          <AccordionItemState>
                            {({ expanded }) =>
                              expanded
                                ? setClassName("expanded")
                                : setClassName("collapsed")
                            }
                          </AccordionItemState>
                          <div className="flexCenter icon">{item.icon}</div>
                          <span className="primaryText">
                            {item.heading}
                          </span>
                          <div className="flexCenter icon">
                            <MdOutlineArrowDropDown size={20} />
                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="secondaryText">
                          {item.detail}
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </motion.div>
                )
              })
            }
          </Accordion>
        </div>
      </div>
    </section>

  )
}

export default Faq
