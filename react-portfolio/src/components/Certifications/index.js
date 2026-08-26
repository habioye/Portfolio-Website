import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState } from 'react'
import certification from './Certification/index.js'
import Certification from './Certification'
const Certifications = () => {
  const [letterClass] = useState('text-animate')
  return (
    <>
      <div className="container certifications-page">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              'C',
              'e',
              'r',
              't',
              'i',
              'f',
              'i',
              'c',
              'a',
              't',
              'i',
              'o',
              'n',
              's',
            ]}
            idx={15}
          />
        </h1>
        <Certification
          Name={'AWS Certified Solutions Architect'}
          Label={'Associate Certification'}
          Date={'September 2025 – September 2028'}
        />

        <h2>
          <bold>AWS Certified Solutions Architect</bold>,{' '}
          <i class="fa fa-italic" aria-hidden="true">
            Associate Certification
          </i>{' '}
          <i class="fa fa-align-right" aria-hidden="true">
            September 2025 – September 2028
          </i>
        </h2>
        <h2>
          <bold>
            Deploy Cloud‐Native Applications using Azure Container Apps
          </bold>
          ,{' '}
          <i class="fa fa-italic" aria-hidden="true">
            Deploy Cloud‐Native Applications using Azure Container Apps
          </i>{' '}
          <i class="fa fa-align-right" aria-hidden="true">
            October 2024
          </i>
        </h2>
        <h2>
          <bold>Azure Engineer Innovation Challenge</bold>,{' '}
          <i class="fa fa-italic" aria-hidden="true">
            Software Challenge
          </i>{' '}
          <i class="fa fa-align-right" aria-hidden="true">
            November 2024
          </i>
        </h2>
        <h2>
          <bold>AI Engineer Innovation Challenge,</bold>,{' '}
          <i class="fa fa-italic" aria-hidden="true">
            Software Challenge
          </i>{' '}
          <i class="fa fa-align-right" aria-hidden="true">
            November 2024
          </i>
        </h2>
      </div>
    </>
  )
}
export default Certifications
