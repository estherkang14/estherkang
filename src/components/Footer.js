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
                <a class="footerlink" href="https://github.com/estherkang14" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a class="footerlink" href="https://linkedin.com/in/esther-kang" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a class="footerlink" href="https://estherkang14.medium.com" target="_blank">
                    <FontAwesomeIcon icon={faMedium} size="2x" />
                </a>
                <a class="footerlink">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
            </div>
            <div><img src={logo} className='logoR'/></div>
        </div>
        </>
    )
    
}

export default Footer;