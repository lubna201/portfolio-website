import React from 'react';
// import '../Header/Header.css'
import project1 from '../../../images/project1.1.jpg';
import project2 from '../../../images/project2.1.png';
import './Portfolio.css';
import { Link } from 'react-router-dom';


const Portfolio = () => {
    return (
        <div className="container mt-5 pt-5">
            <h1 className="text-center mt-5 pt-5 mb-5 design">My Projects</h1>
            <div className="row d-flex g-5 mt-3 pt-3">
                <div className="col-md-6">
                    <div className="card" style={{ width: "100%", height: "100%" }}>
                        <img src={project1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Users can book services with Payment Gateway and add reviews. This website has an admin panel. Admin can add any services and also has login Authentication (Private Route).</p>
                            <p>HTML, CSS, React Js, Node, MongoDB, Heroku, Firebase.</p>
                            <a href="https://sl-event.web.app/" className="card-link">Live</a>
                            <a href="https://github.com/lubna201/Event_management" className="card-link">Server site code</a>
                            <a href="https://github.com/lubna201/Event_management_client" className="card-link">Client site code</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card" style={{ width: "100%", height: "100%" }}>
                        <img src={project2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Users can choose a ride. After login authentication(Private Route) they can see the services available to their destination. This website also has MAP API.</p>
                            <p>HTML, CSS, React Js, Node, Firebase, Bootstrap</p>
                            <a href="https://sl-king-riders.web.app/" className="card-link">Live</a>
                            <a href="https://github.com/lubna201/SL_king_riders" className="card-link">Code</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-5 pt-5">
                <button className="btn btn-info px-4 fw-bold fs-5" type="button"><Link className="text-white" to="/portfolio">Explore More</Link></button>
            </div>
        </div>
    );
};

export default Portfolio;