import React from "react";
import './Footer.css';
import Wave from '../../img/wave.png';
import Facebook from  '@iconscout/react-unicons/icons/uil-facebook';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Email from  '@iconscout/react-unicons/icons/uil-envelope-open'

const Footer = () =>{
    return(
        <div className="footer">
                <img src={Wave} alt="" style={{width: '100%'}}/>
                <div className="f-content">
                    <span>andriamanampyhajatiana.io@gmail.com</span>
                    <div className="f-icons">
                        <a href="https://github.com/ANDRIAMANAMPY" target="_blank" rel="noopener noreferrer">
                        <Github color='white' size='3rem'/>
                        </a>
                        <a href="andriamanampyhajatiana.io@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Email color='white' size='3rem'/>
                        </a>

                        <a href="https://www.linkedin.com/in/hajatiana-andriamanampy" target="_blank" rel="noopener noreferrer">
                        <Linkedin color='white' size='3rem'/>
                        </a>
                        <a href="https://www.facebook.com/Hajatiana Andriamanampy" target="_blank" rel="noopener noreferrer">
                        <Facebook color='white' size='3rem'/>
                        </a>
                        
                        
                        
                    </div>
                </div>      
            </div>
        
    )
}
export default Footer