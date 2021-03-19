import logo from '../imgs/eklogo3.png'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    
    return (
        <>
        <div className="footer">
            <div id='footerlinks'>
                {/* <span class="footerlink"><FontAwesomeIcon icon={faGithub} size="2x" /></span> */}
                <a class="footerlink" href="https://github.com/estherkang14" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                <span class="footerlink"><FontAwesomeIcon icon={faLinkedin} size="2x" /></span>
                <span class="footerlink"><FontAwesomeIcon icon={faMedium} size="2x" /></span>
                <span class="footerlink"><FontAwesomeIcon icon={faEnvelope} size="2x" /></span>
            </div>
            <div><img src={logo} className='logoR'/></div>
        </div>
        </>
    )
    
}

export default Footer;