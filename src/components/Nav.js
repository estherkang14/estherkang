import logo from '../imgs/eklogo2.png'
function Nav() {
    
    return (
        <>
        <div className="nav">
            <div className='navcontainer'>
            <img src={logo} className='logo'/>
            
            <div id='navlinks'>
                <h2 className='navlink'>about</h2>
                <h2 className='navlink'>portfolio</h2> 
                <h2 className='navlink'>resume</h2>
                {/* <h2 className='navlink'>contact?</h2> */}
            </div>
            </div>
            
            
        </div>
        
        </>
    )
    
}

export default Nav;