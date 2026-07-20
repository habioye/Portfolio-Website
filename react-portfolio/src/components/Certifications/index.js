import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useState } from 'react'

const Certifications = () => {
  const [letterClass] = useState('text-animate')
  return (
    <>
      <div className="container certifications-page">
        <h1>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={['C','e','r','t','i','f','i','c']}
            />
        </h1>
      </div>
    </>
  )
}
export default Certifications
