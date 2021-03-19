import logo from '../imgs/eklogo3.png'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    
    return (
        <>
        <div className="footer">
            <div id='footerlinks'>
                <span class="footerlink"><FontAwesomeIcon icon={faGithub} size="2x" /></span>
                <span class="footerlink"><FontAwesomeIcon icon={faLinkedin} size="2x" /></span>
                <span class="footerlink">medium</span>
                <span class="footerlink">email</span>
            </div>
            <div><img src={logo} className='logoR'/></div>
        </div>
        </>
    )
    
}

export default Footer;