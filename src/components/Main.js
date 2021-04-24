// import React from 'react';

function Main() {
    
    return (
        <div className="main">
            <div className="main_intro">
                <h1 className="main_hi">hi! ☺</h1> <h1 className="main_name"> my name is esther kang.</h1>
            </div>

            <div className='main_about'>
                <h1>about me</h1>
                <h2>
                I'm a: <br />
                    - Korean American, born and raised on the East Coast <br />
                    - Software Engineer / Full Stack Web Developer <br />
                    - Bootcamp graduate from Flatiron School '20 - #2commit2git <br />
                    - Dancer <br />
                    - Food enthusiast - I could eat sushi and all types of noodles for days <br />
                    - Adventure seeker - love to travel! Currently in Seoul, South Korea <br />
                    - extra text <br /> </h2>
            </div>

            {/* <div className='main_portfolio'>
                Portfolio will go here
            </div> */}

            {/* <div className='main_resume'>
                Either Resume pdf will go here or a link to my resume
            </div> */}
        </div>
    )
    
}

export default Main;