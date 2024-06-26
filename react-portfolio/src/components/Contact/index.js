import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import React from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer,Marker, Popup } from 'react-leaflet';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timeout = setTimeout(()=> {
            setLetterClass('text-animate-hover')
        },4000)
        return () => clearTimeout(timeout)
    })
    

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_g874xwm', 'template_inox53j', refForm.current,'yH8YLXCtfvvva8TtG')
          .then(
            () => {
              console.log('SUCCESS!');
              alert("Successfully sent the message! 😀😀😀")
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert("Failed to send the message! 😭😭😭",error.text)
            },
          );
          var form = document.getElementsByName('email-form')[0];
          form.reset();
        
      };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}></AnimatedLetters>
                    </h1>
                    <p>
                        
"Thank you for reaching out! I'm always eager to hear from visitors like you. Whether you have a question, feedback, or just want to say hello, feel free to drop me a message using the form below. I'll do my best to get back to you as soon as possible.

Alternatively, you can connect with me through my social media channels or via email. I'm looking forward to our conversation!"
                    </p>
                    <div className="contact-form">
                        <form name="email-form" ref={refForm} onSubmit={sendEmail}>
                             <ul>
                                <li className='half'>
                                    <input type="text" name="from_name" placeholder="Name" required />

                                    </li>
                                    <li className="half">
                                        <input type="email" name="email" placeholder="Email"/>
                                    </li>
                                    <li>
                                        <input placeholder="Subject" type="text" name="subject" required/>
                                    </li>
                                    <li>
                                        <textarea placeholder="Message" name="message" required></textarea>
                                    </li>
                                    <li>
                                        <input type="submit" className="flat-button" value="SEND"/>
                                    </li>
                             </ul>
                        </form>
                    </div>
                   
                    </div>
                <div className="info-map">
                    Hassan Abioye,
                    <br/>
                    Chicago,
                    <br/>
                    IL <br/>
                    USA<br/>
                    <span>Abioyehassan@gmail.com</span>
                </div>
                <div className="map-wrap">
                <MapContainer center={[41.8781, -87.6298]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[41.8781, -87.6298]}>
              <Popup>Hassan lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
                </div>
                </div>
            <Loader type="ball-pulse" />
        </>

    )
}
export default Contact