import React from 'react';
import photo from '../../images/photo.png';
import './AboutMe.css';
import pdf from '../../Sazida.pdf';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className=" container mt-5 pt-5">
            <div className="mt-5 pt-5 d-flex justify-content-center">
                <img src={photo} alt=""></img>
            </div>
            <div className="text-white text-center mt-5">
                <h6>Hello, I'm</h6>
                <h2 style={{ color: "#0dcaf0" }}>Sazida Sultana Binte Jamal</h2>
                <h5 className=" lh-base p-5 mx-5" style={{ textAlign: "justify", textJustify: "inter-word" }}>An enthusiastic web developer with a deep interest in React. I love taking on challenges and learning new concepts. My career objective is to succeed in an environment of growth and excellence in the professional and challenging field of the Web Development industry to become a skilled and dedicated web developer in near future. </h5>
            </div>
            <div className="mt-5 d-flex justify-content-center">
                    <button type="button" className="btn btn-info ms-1 text-white fw-bold fs-5"><a href={pdf} download style={{ textDecoration: 'none', color: 'white' }}>Download Resume</a></button>
                    <button type="button" className="btn ms-4 btn-info text-white fw-bold fs-5"><Link className="nav-link text-white" to="/resume">See My Resume</Link></button>
                </div>
            <h1 className="mt-5 pt-5 text-center text-white">My Skills</h1>
            <div className="mt-5 pt-5 d-flex justify-content-center">
                <div className="row g-5 d-flex">
                    <div className="col-md-6">
                        <div className="skill-bars">
                            <div className="bar">
                                <div className="info">
                                    <span>HTML</span>
                                </div>
                                <div className="progress-line html">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>CSS</span>
                                </div>
                                <div className="progress-line css">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>JavaScript</span>
                                </div>
                                <div className="progress-line javaScript">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>React JS</span>
                                </div>
                                <div className="progress-line react">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>Node</span>
                                </div>
                                <div className="progress-line node">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>Bootstrap</span>
                                </div>
                                <div className="progress-line bootstrap">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>Material UI</span>
                                </div>
                                <div className="progress-line materialUI">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>MongoDB</span>
                                </div>
                                <div className="progress-line mongoDB">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>Express JS</span>
                                </div>
                                <div className="progress-line expressJS">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skill-bars">
                            <div className="bar">
                                <div className="info">
                                    <span>Firebase</span>
                                </div>
                                <div className="progress-line firebase">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>Heroku</span>
                                </div>
                                <div className="progress-line heroku">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>Netlify</span>
                                </div>
                                <div className="progress-line netlify">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>GitHub</span>
                                </div>
                                <div className="progress-line gitHub">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>Visual Studio</span>
                                </div>
                                <div className="progress-line visualStudio">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>C</span>
                                </div>
                                <div className="progress-line c">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>C++</span>
                                </div>
                                <div className="progress-line cPlus">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>Adobe Illustrator</span>
                                </div>
                                <div className="progress-line illustrator">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span>Adobe Photoshop</span>
                                </div>
                                <div className="progress-line photoshop">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;