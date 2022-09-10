import "./FooterStyles.css";
import React from 'react';
import {FaWhatsapp, FaInstagram, FaHome, FaPhone, FaMailBulk} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">

        <div className="footer-container">

            <div className="left">

                <div className="location">
                    <FaHome size={25} />
                    <div>
                        <h4>Enugu, Nigeria</h4>
                    </div>
                </div>

                <div className="phone">
                    <h4>
                      <a href="tel:">
                    <FaPhone size={25} 
                    />
                        (+234) 811-5439-302
                        </a>
                    </h4>
                </div>
                
                <div className="email">
                    <h4>
                     <a 
                    href="mailto:AugustObumneme@gmail.com"
                        >
                    <FaMailBulk size={25} 
                        />                        
                        AugustObumneme@gmail.com
                    </a>
                    </h4>
                </div>
                
            </div>

            <div className="right">
                    <p>Contact Us</p>
                <div className="socials" >

                    <a
                          href="https://www.instagram.com/ag_obum/?utm_medium=copy_link"
                          >
                            <FaInstagram size={25}/>
                          </a>

                    <a
                          href="https://wa.me/message/DLRWTUOCJHXHH1"
                          >
                            <FaWhatsapp size={25}/>
                          </a>
                </div>
            </div>
            
            <h6>Copyright (c)  2022 All rights reserved || This was designed by <a href="https://6ixxxxx.github.io/portfolio-6ixxxxx">6ixxxxx</a></h6>
        </div>
    </div>
)
}
export default Footer