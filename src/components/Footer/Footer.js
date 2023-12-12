import React from "react";
import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

class Footer extends React.Component {
    render() {
        return (
            <>
            <div className="footer">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, nisi. Consequuntur 
                veritatis<br /> fugit laboriosam voluptatibus, molestias repudiandae consequatur rem, 
                minus nostrum modi quo, soluta a quaerat tenetur.<br /> Esse, similique sed</p>
                <div className="icons">
                    <div className="icon">
                        <FaFacebook color="#212121" size={20}/>
                    </div>
                    <div className="icon">
                        <FaInstagram color="#212121" size={20}/>
                    </div>
                    <div className="icon">
                        <FaLinkedin color="#212121" size={20}/>
                    </div>
                    <div className="icon">
                        <FaSquareXTwitter color="#212121" size={20}/>
                    </div>  
                </div>
            </div>
            </>
        )
    }
}

export default Footer;