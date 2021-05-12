// import React from 'react';

function Main() {
    
    return (
        <section className="main">
            <div className="main_container grid">
                <div className="main_intro" id='intro'>
                    <h1 className="main_hi">hi! ☺</h1> 
                    <h1 className="main_name"> my name is esther kang</h1>
                    <h1 className="main_name"> or 강승연.</h1>
                    <a href="#about"><h2 className="down_arrow">v</h2></a>
                </div>

                <div className='main_about' id="about">
                    <h1>about me</h1>
                    <h3>
                    I'm a: <br />
                        - Korean American, born and raised on the East Coast <br />
                        - Software Engineer / Full Stack Web Developer <br />
                        - Bootcamp graduate from Flatiron School '20 - #2commit2git <br />
                        - Dancer <br />
                        - Food enthusiast - I could eat sushi and all types of noodles for days <br />
                        - Adventure seeker - love to travel! Currently in Seoul, South Korea <br />
                        - Actively seeking new job opportunities! <br/>
                        Location preferences: 
                        <ul>
                            <li>Seoul, South Korea</li>
                            <li>DMV / Washington D.C.</li>
                            <li>Seattle, WA </li>
                            <li>Atlanta, GA </li>
                            <li>Los Angeles, CA</li>
                            <li>San Diego, CA</li>
                        </ul><br /> </h3>
                </div>

                <div className='main_portfolio' id='portfolio'>
                    <h1>portfolio</h1>
                    Portfolio will go here
                </div>

                <div className='main_resume' id='resume'>
                    <h1>resume</h1>
                    Either Resume pdf will go here or a link to my resume
                </div>
            </div>
        </section>
    )
    
}

export default Main;