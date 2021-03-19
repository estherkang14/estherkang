import logo from '../imgs/eklogo3.png'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedIn } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    
    return (
        <>
        <div className="footer">
            <div id='footerlinks'>
                <span class="footerlink">github</span>
                <span class="footerlink"><FontAwesomeIcon icon={faLinkedIn} /></span>
                <span class="footerlink">medium</span>
                <span class="footerlink">email</span>
            </div>
            <div><img src={logo} className='logoR'/></div>
        </div>
        </>
    )
    
}

export default Footer;