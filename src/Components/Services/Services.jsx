import React from "react";
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png"
import Card from "../Card/Card";
import Resume from './Resume.pdf';

const Services = () =>{
    return(
        <div className="services" id="Services">
            { /* left side */}
            <div className="awesome">
            <span></span>
            <span>Coordonnées et Spécialités</span>
            <span className="font-bold">
                Je m'appelle ANDRIAMANAMPY Hajatiana, j'ai 25 ans et je suis un jeune diplômé et passionné dans le <br/>
                domaine informatique. J'ai fait mes études universitaires à l'Ecole Nationale d'Informatique, abrégée ENI,<br/>
                 et j'ai obtenu mon diplôme de Master professionel en Informatique.<br/>
                 <ul>
                    <li className="font-bold">Date et Lieu de naissance : 28 Février 1999 à Ambositra</li>
                    <li className="font-bold">Diplôme :  Master II en Informatique</li>
                    <li className="font-bold">Adresse: Ambohipo, bloc 10 Antananarivo</li>
                    <li className="font-bold">Contact : +2619690760</li>
                    <li className="font-bold">Adresse E-mail : andriamanampyhajatiana.io@gmail.com</li>
                    <li className="font-bold">Freelance : possible</li>
                    <li className="font-bold">5 Ans d'Experiences</li>
                    <li className="font-bold">Plus de 20 projets réalisés</li>
                 </ul>
                
            </span>
            <a href={Resume} download>
            <button className="button s-button text-sm">Download CV</button>
            </a>
            
            <div className="blur s-blur1" style={{background: "#ABF1FF94" }}></div>

            </div>
            {/* right side */}
            <div className="cards">
                <div style={{left: '14rem'}}>
                    <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {"Figma, Photoshop, Adobe illustrator"}
                    />
                </div>

            {/* second card */}
            <div style={{top: '12rem', left: '-4rem'}}>
                <Card
                emoji={Glasses}
                heading={"Developpeur"}
                detail={"HTML et CSS, Javascript, React.js,Next.js,taiwindcss,typescript etc ..."}
                />
            </div>
            {/* 3rd Card*/}
            <div style={{top: '19rem', left: '12rem'}}>
               <Card
                emoji={Humble}
                heading={"Systéme d'exploitation et plateforme d'hebergement: "}
                detail={
                    'Windows, Linux: Ubuntu, Debian, parotte, kali, github, gitlab'
                }
               /> 
            </div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>

            </div>
        </div>
    )

   
}
export default Services;