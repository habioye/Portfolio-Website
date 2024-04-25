import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['l','o','b','o','d','a','n']
    const jobArray = ['w','e','b','d','e','v','o','p','e','r']
    
    // useEffect(()=> {
    //     return setTimeout(()=> {
    //         setLetterClass('text-animate-hover');
    //         console.log("check later")
    //     }, 4000)

    // }, [])
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}></AnimatedLetters>
                    </h1>
                    </div>
                </div>
            <Loader type="pacman" />
        </>
    )
}
export default Contact