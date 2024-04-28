import './index.scss';
import { useEffect, useState, useRef } from 'react'

import LogoH from '../../../assets/images/logo-h.png';



const Logo = () => {
 
    return (
        <div className="logo-container" >

            <img className="solid-logo" src={LogoH} alt = "H" />
            
            
      

        </div>
    )
}


export default Logo