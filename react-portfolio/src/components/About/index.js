import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
// import Layout from "./components/Layout"
// import Home from "./components/Home"
import Loader from 'react-loaders'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faHtml5, faCss3, faReact, faJsSquare, faGitAlt } from "@fortawesome/free-brands-svg-icons";
 


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    // useEffect(()=> {
    //     return setTimeout(()=> {
    //         setLetterClass('text-animate-hover');
    //         console.log("check later")
    //     }, 4000)

    // }, [])
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray = {['A','b','o','u','t','e',' ','m','e']}
                        idx={15}
                        />
                    </h1>
                        <p>
                            A little about me
                        </p>
                        <p>
                            some more about me
                        </p>
                        <p>
                            last few things to remember me by
                        </p>
                </div>
                <div className="stage-cube-cont">
                    <div className='cubespinner'>
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4f4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>


                </div>
            </div>
            <Loader type="pacman" />
        </>
)
}

export default About