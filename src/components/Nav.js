import logo from '../imgs/eklogo2.png'
function Nav() {
    
    return (
        <>
        <div className="nav">
            <div className='navcontainer flex'>
                <img src={logo} className='logo'/>
            
                {/* <div id='navlinks'>
                    <h2 className='navlink'>about</h2>
                    <h2 className='navlink'>portfolio</h2> 
                    <h2 className='navlink'>resume</h2>
                    
                </div> */}
                <nav>
                    <ul>
                        <li><a href='about.html'>about</a></li>
                        <li><a href='portfolio.html'>portfolio</a></li>
                        <li><a href='resume.html'>resume</a></li>
                    </ul>
                </nav>
            </div>
            
            
        </div>
        
        </>
    )
    
}

export default Nav;