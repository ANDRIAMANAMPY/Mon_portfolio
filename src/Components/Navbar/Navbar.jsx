import React from "react";
import '../Navbar/Navbar.css';
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import { useSpring, animated } from "react-spring";

const Navbar = () => {

    const animationProps = useSpring({
        loop: true,
        from: { color: 'red' },
        to: [
          { color: 'blue' },
          { color: 'orange' },
        ],
      });
    return (
        <div className="n-wrapper" >
            <div className="n-left">
                <animated.div className="n-name text-4xl italic" style={animationProps}>Hajatiana</animated.div>
                <Toggle/>
                
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                        <li className="text-lg font-bold tracking-wide">Accueil</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true} activeClass="activeClass">
                        <li className="text-lg font-bold tracking-wide">Compétences</li>
                        </Link>
                        
                        <Link spy={true} to='Works' smooth={true} activeClass="activeClass">
                        <li className="text-lg font-bold tracking-wide">Formations</li>
                        </Link>                      
                        <Link spy={true} to='Portfolio' smooth={true} activeClass="activeClass">
                        <li className="text-lg font-bold tracking-wide">Portfolio</li>
                        </Link>
                        <Link spy={true} to='Contact' smooth={true} activeClass="activeClass">
                        <li className="text-lg font-bold tracking-wide">Contact</li>
                        </Link>
                        
                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true} activeClass="activeClass">
                <button className="button n-button text-sm">
                         Contact
                    </button>
                </Link>
                
            </div>
        </div>
    )
}
export default Navbar;