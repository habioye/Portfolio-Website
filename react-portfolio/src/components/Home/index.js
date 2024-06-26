
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-h.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
// import Loader from 'react-loaders';
import Logo from './Logo';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a','s','s','a','n']
    const jobArray = ['S','o','f','t','w','a','r','e','/','W','e','b',' ','D','e','v','e','l','o','p','e','r']
    
    useEffect(() => {
        const timeout = setTimeout(()=> {
            setLetterClass('text-animate-hover')
        },4000)
        return () => clearTimeout(timeout)
    })
    


    return (
        <>
        <div className="container home-page">
            <Logo/>
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />

                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>

                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray} 
                idx={15}/>


                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray} 
                idx={14}/>
                
                </h1>
                <h2> Software Engineer / Fullstack Developer / Learner</h2>
                <Link to="/contact" className='flat-button'> Contact Me</Link>
            </div>
            
        </div>
        <Loader type="ball-pulse"/>
        </>
    );
}
export default Home