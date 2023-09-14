import React from "react";

import { SiInstagram } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { ImGoogle } from 'react-icons/im';

const Footer = () => {
    
    const socialStyle = {
        color : "#fff",
        fontSize: "18px"
    }
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="row px-2">

                    <div className="col-lg-12 text-start social-links">

                        <ImGoogle style={socialStyle} />
                        <SiLinkedin style={socialStyle} />
                        <SiInstagram style={socialStyle} />

                    </div>
                    <div className="col-lg-12 cpright text-white">
                        کدنویسی توسط علی قاسمی  © <span itemProp="copyrightYear">2023</span>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default React.memo(Footer)