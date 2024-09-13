import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import './Contact.css';
import { useSpring, animated } from "react-spring";

const Contact = () =>{

    const animationProps = useSpring({
        loop: true,
        from: { color: 'orange' },
        to: [
          { color: 'blue' },
          { color: 'green' },
          { color: 'red'}
        ],
      });

    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_cuw9syf', 'template_2gmp7aq', form.current, {
          publicKey: 'dthJdrlqNzmJLmvGd',
        })
        .then((result) => {
            console.log(result.text);
            setDone(true);
          },(error) => {
            console.log(error.text);
          },
        );
    };

    return(
        <div className="contact-form pt-10" id="Contact">
            <div className="w-left">
                <div className="awesome">
                    <animated.span style={animationProps}></animated.span>
                    <animated.span style={animationProps}>Contacter moi par email</animated.span>
                    <div
                    className="blur s-blur1"
                    style={{background: "#ABF1FF94"}}
                    ></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Nom" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message"/>
                    <input type="submit" value="Envoyer" className="button" />
                    <span>{done && "Merci de m'avoir contacter"}</span>
                    <div
                    className="blur c-blur1"
                    style={{background: "var(--purple)"}}
                    ></div>
                </form>
            </div>
        </div>
    )
}
 
export default Contact