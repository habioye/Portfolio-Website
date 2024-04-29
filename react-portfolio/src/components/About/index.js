import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import Loader from 'react-loaders'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faReact, faJsSquare } from "@fortawesome/free-brands-svg-icons";
import awslogo from '../../assets/images/awslogo.png'
import princetonlogo from '../../assets/images/Princeton_seal.svg'
import acmlogo from '../../assets/images/acmlogo.png'


const About = () => {

    const [letterClass] = useState('text-animate')

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray = {['A','b','o','u','t',' ','m','e']}
                        idx={15}
                        />
                    </h1>
                        <p>
                        My journey at Princeton University was defined by a dedication to excellence in Computer Science, culminating in my graduation with a Bachelor of Science in Engineering and a commendable GPA of 3.9. This period was marked by diverse experiences, from my role as a Software Development Engineer at Amazon Web Services in Seattle, where I contributed to Kubernetes and alarm management systems, to my time as an Assistant Instructor, guiding students through lab activities and assignments in EGR 153.

                        </p>
                        <p>
                        Outside the classroom, I embraced leadership roles, notably as Project Manager and Web-developer for the Mist Web Application at Butler College Council. Here, I led a team in developing a web app facilitating event creation on a Google Maps interface. Managing project scope and collaborating with stakeholders underscored my commitment to effective project management and stakeholder engagement.


                        </p>
                        <p>
                        Throughout my academic and professional journey, I honed a versatile skill set, mastering languages like Python, Java, and Golang, alongside soft skills in leadership and communication. These experiences, coupled with coursework in Distributed Systems and Algorithms, as well as leadership roles such as Technology Chair for the Princeton Chapter of ACM, have prepared me for the challenges and opportunities ahead in the dynamic field of computer science.

                        </p>
                </div>
                <div className="stage-cube-cont">
                    <div className='cubespinner'>
                        <div className="face1">
                            <img src={awslogo} className="aws"/>
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <img src={princetonlogo} className="princeton"></img>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4f4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <img src={acmlogo} className="acm"></img>
                        </div>
                    </div>


                </div>
            </div>
            <Loader type="ball-pulse" />
        </>
)
}

export default About