import React from 'react';
import './Resume.css';
import pdf from '../../Sazida.pdf';

const Resume = () => {
    return (
        <div>
            <div className="whole">
            <div className="text">
                <h1 className="name">Sazida Sultana Binte Jamal</h1>
                <h3 className="front">Front End Developer</h3>
                <div className="row g-5 m-4 text-white justify-content-center">
                    <div className="col-md-4">
                        <h2>Profile</h2>
                        <p className="mt-4">Courteous and enthusiastic,have strong driving force for improving the performance,scalability, and reliability of development projects.</p>
                        <h2>Contact</h2>
                        <ul className="a">
                            <li>Shyamol Chhaya, Chattogram</li>
                            <li>lubnasazida@gmail.com</li>
                            <li><a href="https://github.com/lubna201" target="_blank" rel="noreferrer" className="text-white">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/sazida-sultana-binte-jamal-22b147203/" className="text-white" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        </ul>
                        <h2>Skills</h2>
                        <ul className="a">
                            <li>HTML, CSS, JavaScript, React JS,Bootstrap, Material UI,Node JS Express JS,MongoDB.</li>
                            <li>Firebase , Heroku, Netlify,GitHub, Visual Studio.</li>
                            <li>C, C++, Adobe Illustrator,Adobe Photoshop.</li>
                        </ul>
                        <h2>Education</h2>
                        <p>East Delta University B.Sc in Computer Science and Engineering, 2019-present</p>
                    </div>
                    <div className="col-md-8">
                        <h2>Projects</h2>
                        <h5 className="mt-4">Project 1 - Event Management</h5>
                        <div className="row mt-4">
                            <div className="col-md-3">
                                <p>14 APRIL 2021 - 17 APRIL 2021</p>
                            </div>
                            <div className="col-md-9">
                                <p>Users can book services with Payment Gateway and add reviews.This website has an admin panel. Admin can add any services and also has login Authentication (Private Route)</p>
                                <p>HTML, CSS, React Js, Node, MongoDB, Heroku, Firebase.</p>
                            </div>
                        </div>
                        <a href="https://sl-event.web.app/" target="_blank" rel="noreferrer" className="des text-white">Live</a>
                        <a href="https://github.com/lubna201/Event_management" className="ms-5 des text-white" target="_blank" rel="noreferrer">Server Site Code</a>
                        <a href="https://github.com/lubna201/Event_management_client" className="ms-5 des text-white" target="_blank" rel="noreferrer">Client Side Code</a>

                        <h5 className="mt-4">Project 2 - Rise and Shine Grocery</h5>
                        <div className="row mt-4">
                            <div className="col-md-3">
                                <p>30 MARCH 2021 - 1 APRIL 2021</p>
                            </div>
                            <div className="col-md-9">
                                <p>A shopping site where clients can place orders. This website has login Authentication (Private Route), Admin Panel with add and manages service.</p>
                                <p>HTML, CSS, React Js, Node, Heroku, MongoDB, Firebase, Bootstrap</p>
                            </div>
                        </div>
                        <a href="https://rise-and-shine-grocery.web.app/" target="_blank" className="des text-white" rel="noreferrer">Live</a>
                        <a href="https://github.com/lubna201/Rise_And_Shine_server" className="ms-5 des text-white" target="_blank" rel="noreferrer">Server Site Code</a>
                        <a href="https://github.com/lubna201/Rise_And_shine_Client" className="ms-5 des text-white" target="_blank" rel="noreferrer">Client Side Code</a>

                        <h5 className="mt-4">Project 3 - SL King Riders</h5>
                        <div className="row mt-4">
                            <div className="col-md-3">
                                <p>18 MARCH 2021 - 19 MARCH 2021</p>
                            </div>
                            <div className="col-md-9">
                                <p>Clients can choose a ride. This website has login Authentication (Private Route), MAP API</p>
                                <p>HTML, CSS, React Js, Node, Firebase, Bootstrap.</p>
                            </div>
                        </div>
                        <a href="https://sl-king-riders.web.app/" target="_blank" className="des text-white" rel="noreferrer">Live</a>
                        <a href="https://github.com/lubna201/SL_king_riders" className="ms-5 des text-white" target="_blank" rel="noreferrer">Code</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-5 pt-5 d-flex justify-content-center">
        <button type="button" className="btn btn-info text-white fw-bold fs-5"><a href={pdf} download style={{textDecoration:'none',color:'white'}}>Download Resume</a></button>
        </div>
        </div>
    );
};

export default Resume;