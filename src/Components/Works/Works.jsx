import React, { useState } from "react";
import './Works.css'
import mailaka from '../../img/im.png';
import LinkedIn from '../../img/linkedin.png';
import Github from '../../img/github.png';
import Facebook  from '../../img/Facebook.png';
import { Link } from "react-scroll";
import { useSpring, animated } from 'react-spring';
const Works = () =>{

    const [isHovered, setIsHovered] = useState(false);

    const emojiProps = useSpring({
        transform: isHovered ? 'scale(1.5)' : 'scale(1)',
        config: { tension: 100, friction: 10 }
    });

    return(
        <div className="works" id="Works">
            <div className="awesome">
            <span></span>
            <span>Formations Professionnellles</span>
            <ul><span style={{color: 'blue', fontSize: '2rem', fontWeight: 'bold', marginBotto:'5px'}}>Educations</span>
                <li style={{paddingTop: '10px'}}> <span style={{color: 'rgb(192, 69, 69)'}}>2018-2021</span> : Formation de 3 Ans et Obtention du Diplôme de Licence 
                Professionnel en<br/>  Informatique à l'ENI</li>
                <li><span style={{color: 'rgb(192, 69, 69)'}}>2022-2023</span> : Formation de 2 Ans et Obtention du diplôme de Master II  en Informatiqueà l'ENI</li>
            </ul>
            <ul><span style={{color: 'blue', fontSize: '2rem', fontWeight: 'bold', marginBotto:'5px'}}>Expériences</span>
                <li style={{paddingTop:'10px'}}><span style={{color:'rgb(192, 69, 69)'}}>Octobre-Décembre 2018</span> : Développement d'une application Web pour la gestion de cours<br/> 
                en ligne à l'ENI pour Projet fin d'année (développé par C++ et Qt)</li>
                <li><span style={{color:'rgb(192, 69, 69)'}}>Octobre 2019-Janvier 2020</span> : Développement d'une application des Ressources Humains  au <br/>sein de Direction Régionale du Budget et de Finance Manakara ( développé  par  PHP et MySql)</li>
                <li><span style={{color:'rgb(192, 69, 69)'}}>Novembre 2020-Mars 2021</span> : Développement d'une application ChatBoxMessage  au sein de la Trésorerie Générale d'Antaninarenina Antananarivo dit TGA</li>
                <li><span style={{color:'rgb(192, 69, 69)'}}>juillet-Décembre 2023</span> : Développement d'une Application Web pour l'Anlyses des Ventes au sein de <br/>l'entreprise ESN Iz-E center (développé par Vues.js et Node.js, Postrgresql)</li>

            </ul>

            
        <Link spy={true} to='Contact' smooth={true} activeClass="activeClass">
        <button className="button s-button">Contacter-moi</button>
        </Link>

            
            <div className="blur s-blur1" style={{background: "#ABF1FF94" }}></div>
            </div>

            {/* right side*/}
            <div className="w-right mt-10">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                    <a href="https://www.linkedin.com/in/hajatiana-andriamanampy" target="_blank" rel="noopener noreferrer">
                        <animated.img 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={emojiProps}
                        role="img"
                        aria-label="emoji"
                        src={LinkedIn} alt="" />
                    </a>
                    </div>
                    
                    <div className="w-secCircle">
                    <a href="www.github.com" target="_blank">
                        <animated.img 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={emojiProps}
                        role="img"
                        aria-label="emoji"
                        src={Github} alt="" />
                    </a>
                    </div>
                    
                    <div className="w-secCircle">
                        <a href="andriamanampyhajatiana.io@gmail.com" target="_blank">
                        <animated.img 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{emojiProps, width :'4.5rem'}}
                        role="img"
                        aria-label="emoji"
                        src={mailaka} alt=""/>
                        </a>
                        
                    </div>
                    <div className="w-secCircle">
                        <a href="https://www.facebook.com/Hajatiana Andriamanampy" target="_blank" rel="noopener noreferrer">
                        <animated.img 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={emojiProps}
                        role="img"
                        aria-label="emoji"
                        src={Facebook} alt="" />
                        </a>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Works;