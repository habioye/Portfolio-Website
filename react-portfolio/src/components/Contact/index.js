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
    
    // useEffect(()=> {
    //     return setTimeout(()=> {
    //         setLetterClass('text-animate-hover');
    //         console.log("check later")
    //     }, 4000)

    // }, [])
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_g874xwm', 'template_inox53j', refForm.current,'yH8YLXCtfvvva8TtG')
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert("{error.text}")
            },
          )
      }
    // const sendEmail = (e) => {
    //     e.preventDefault()

    //     emailjs
    //     .sendForm (
    //         'service_arqa81b',
    //         'template_581317',
    //         refForm.current,
    //         {
    //             publicKey: 'yH8YLXCtfvvva8TtG',
    //         }

    //     )
    //     .then (() => {
    //         alert('Message successfully sent!')
    //         window.location.reload(false)
    //     },
    // () => {
    //     alert('Failed to send the message, please try again')
    // })
    // }
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
                    <div className="contact-form"
                    ref={refForm} onSubmit={sendEmail}>
                        <form>
                             <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />

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
                <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
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