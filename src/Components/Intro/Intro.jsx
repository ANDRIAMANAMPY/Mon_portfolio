import React, { useState} from "react";
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Facebook from '../../img/Facebook.png'
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Haja from '../../img/haja.png';
import mailaka from '../../img/im.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { Link } from "react-scroll";
import { useSpring, animated } from "react-spring";


const Intro = () => {
   
    const [isHovered, setIsHovered] = useState(false);

    const emojiProps = useSpring({
        transform: isHovered ? 'scale(1.5)' : 'scale(1)',
        config: { tension: 100, friction: 10 }
    });

    const animationProps = useSpring({
        loop: true,
        from: { color: 'red' },
        to: [
          { color: 'blue' },
          { color: 'orange' },
        ],
      });
    

    return(
        
        <div className="intro">
            <div className="i-left">
            <div className="i-name">
                <span>Hello, Je m'appelle</span>
                <animated.span style={animationProps}>ANDRIAMANAMPY Hajatiana</animated.span>
                <span>Développeur Frontend React.js avec de bonne qualités de 
                    travail avec son framework comme Next.js, le framework CSS comme Tailwindcss et beacoup d'autres téchnologies modèrnes.
                     Je suis aussi un Designer Web avec beaucoup d'expériences en réalisation des maquettes.</span>
            </div>
            <Link spy={true} to='Contact' smooth={true} activeClass="activeClass">
            <button className="button i-button text-base">Contact</button>
            </Link>
            
            <div className="i-icons">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <animated.img 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={emojiProps}
                role="img"
                aria-label="emoji"
                src={Github} alt="" />
                </a>
                <a href="andriamanampyhajatiana.io@gmail.com" target="_blank" rel="noopener noreferrer">
                <animated.img 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={emojiProps}
                role="img"
                aria-label="emoji"
                src={mailaka} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/hajatiana-andriamanampy" target="_blank" rel="noopener noreferrer">
                <animated.img 
                
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={emojiProps}
                role="img"
                aria-label="emoji"
                src={LinkedIn} alt="" />
                </a>
                <a href="https://www.facebook.com/Hajatiana Andriamanampy" target="_blank" rel="noopener noreferrer">
                <animated.img 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={emojiProps}
                role="img"
                aria-label="emoji"
                src={Facebook} alt=""/>
                </a>
                
            </div>

            </div>
            <div className="i-right ">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Haja} alt="" />
                <animated.img 
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={emojiProps}
                  role="img"
                  aria-label="emoji"
                src={glassesimoji} alt="" />
                <div style={{top: '-4%', left:'68%'}}
                className="floating-div">
                <FloatingDiv image={Crown} txt1='Developpeur' txt2='Web'/>
                </div> 
                <div style={{top:'18rem', left:'0rem'}}
                className="floating-div">
                    <FloatingDiv image={thumbup} txt1="Designeur" txt2="Web" />
                </div>
                {/* blur divs */}
                <div className="blur" style={{background:'rgb(238 210 255)'}}
                ></div>
                <div className="blur"
                style={{
                    background: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'

                }}
                
                ></div>
             </div>
        </div>
            
           

       
    )
}
export default Intro