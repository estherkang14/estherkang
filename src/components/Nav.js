import logo from '../imgs/eklogo2.png'
function Nav() {
    
    return (
        <>
        <div className="nav">
            <div className='navcontainer flex'>
                <a href='#intro'><img src={logo} className='logo'/></a>
            
                {/* <div id='navlinks'>
                    <h2 className='navlink'>about</h2>
                    <h2 className='navlink'>portfolio</h2> 
                    <h2 className='navlink'>resume</h2>
                    
                </div> */}
                <nav>
                    <ul>
                        <li><a href='#about'>about</a></li>
                        <li><a href='#portfolio'>portfolio</a></li>
                        <li><a href='#resume'>resume</a></li>
                    </ul>
                </nav>
            </div>
            
            
        </div>
        
        </>
    )
    
}

export default Nav;