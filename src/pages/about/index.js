import React from 'react';
import  './styles.css';
import Header from '../../components/header';

const About = () => {
    return (
        <div className="about-container">
            <Header/>
            <div className="header">
                <h1>CODE CRAFT</h1>
                <p>LEARN, CREATE, INNOVATION</p>
                <h4>Engineering Classes for Tech Enthusiast</h4>
            </div>
            <div className="Subjects">
                <h3>subject Offered</h3>
                <ul>
                    <li>JavaScript</li>    <li>TailwindCss</li>
                    <li>HYML</li>          <li>Express.js</li>
                    <li>CSS</li>           <li>Mongo DB</li>
                    <li>React.js</li>      <li>Java</li>
                    <li>Node.js</li>       <li>C</li>
                </ul>
            </div>
            <div className="why-choose">
                <h3>Why choose code-craft</h3>
                <ul>
                     <li>Expert instructor eith 5+ years of software</li>
                     <li>Developement Industry Experience</li>
                     <li>Hands-On practical session</li>
                     <li>Focus on real-world application development</li>
                </ul>
            </div>
        </div>
    )
}
export default About