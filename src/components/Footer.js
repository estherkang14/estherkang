import logo from '../imgs/eklogo3.png'

function Footer() {
    
    return (
        <>
        <div className="footer">
            <div id='footerlinks'>
                <span class="footerlink">github</span>
                <span class="footerlink">linkedin</span>
                <span class="footerlink">medium</span>
                <span class="footerlink">email</span>
            </div>
            <div><img src={logo} className='logoR'/></div>
        </div>
        </>
    )
    
}

export default Footer;