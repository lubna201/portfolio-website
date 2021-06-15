import React from 'react';
import project1f from '../../images/project1.1.jpg';
import project1s from '../../images/project1.2.png';
import project1t from '../../images/project1.3.png';
import project2f from '../../images/project2.1.png';
import project2s from '../../images/project2.2.png';
import project2t from '../../images/project2.3.png';
import project3f from '../../images/project3.1.jpg';
import project3s from '../../images/project3.2.png';
import project3t from '../../images/project3.3.png';
import project6f from '../../images/project6.1.png';
import project6s from '../../images/project6.2.png';
import project6t from '../../images/project6.3.png';
import project5f from '../../images/project5.1.png';
import project5s from '../../images/project5.2.png';
import project5t from '../../images/project5.3.png';
import project4f from '../../images/project4.1.png';
import project4s from '../../images/project4.2.png';
import project4t from '../../images/project4.3.png';
import project7f from '../../images/project7.1.png';
import project7s from '../../images/project7.2.png';
import project7t from '../../images/project7.3.png';
import project8f from '../../images/project8.1.png';
import project8s from '../../images/project8.2.png';
import project8t from '../../images/project8.3.png';
import './PortfolioMain.css';

const PortfolioMain = () => {
    return (
        <div className="container mt-5 pt-5">
            <h1 className="mt-5 pt-5 text-center" style={{ fontSize: "50px", color: "#0dcaf0" }}>Projects</h1>
            <div className="row m-3 pt-2 g-5 d-flex align-items-center justify-content-center">
                <div className="col-md-6 justify-content-center">
                    <div className="card" style={{ width: "100%", height: "100%" }}>
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={project1f} className="d-block w-100 img-design" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={project1s} className="d-block w-100 img-design" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={project1t} className="d-block w-100 img-design" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="card-body">
                            <h5>Event_management</h5>
                            <p className="card-text">Users can book services with Payment Gateway and add reviews. This website has an admin panel. Admin can add any services and also has login Authentication (Private Route).</p>
                            <p>HTML, CSS, React Js, Node, MongoDB, Heroku, Firebase.</p>
                            <a href="https://sl-event.web.app/" className="card-link">Live</a>
                            <a href="https://github.com/lubna201/Event_management" className="card-link">Server site code</a>
                            <a href="https://github.com/lubna201/Event_management_client" className="card-link">Client site code</a>
                        </div>
                    </div>
                </div>


                <div className="col-md-6 justify-content-center">
                    <div className="card" style={{ width: "100%", height: "100%" }}>
                        <div id="carouselSecond" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={project2f} className="d-block w-100 img-design img-design" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={project2s} className="d-block w-100 img-design" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={project2t} className="d-block w-100 img-design" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselSecond" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselSecond" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="card-body">
                            <h5>Sl King Riders</h5>
                            <p className="card-text">Users can book services with Payment Gateway and add reviews. This website has an admin panel. Admin can add any services and also has login Authentication (Private Route).</p>
                            <p>HTML, CSS, React Js, Node, MongoDB, Heroku, Firebase.</p>
                            <a href="https://sl-event.web.app/" className="card-link">Live</a>
                            <a href="https://github.com/lubna201/Event_management" className="card-link">Server site code</a>
                            <a href="https://github.com/lubna201/Event_management_client" className="card-link">Client site code</a>
                        </div>
                    </div>
                </div>
            </div>



            <div className="row m-3 p-2 g-5 align-items-center justify-content-center">
                <div className="col-md-6 justify-content-center">
                    <div className="card" style={{ width: "100%", height: "100%" }}>
                        <div id="carouselc" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={project3f} className="d-block w-100 img-design" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={project3s} className="d-block w-100 img-design" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={project3t} className="d-block w-100 img-design" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselc" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselc" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="card-body">
                            <h5>Rise and Shine Grocery</h5>
                            <p className="card-text">A shopping site where clients can place orders. This website has login Authentication (Private Route), Admin Panel with add and manages service.</p>
                            <p>HTML, CSS, React Js, Node, Heroku, MongoDB, Firebase Bootstrap</p>
                            <a href="https://rise-and-shine-grocery.web.app/" className="card-link">Live</a>
                            <a href="https://github.com/lubna201/Rise_And_Shine_server" className="card-link">Server site code</a>
                            <a href="https://github.com/lubna201/Rise_And_shine_Client" className="card-link">Client site code</a>
                        </div>
                    </div>
                </div>


                <div className="col-md-6 justify-content-center">
                    <div className="card" style={{ width: "100%", height: "100%" }}>
                        <div id="carouseld" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={project7f} className="d-block w-100 img-design" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={project7s} className="d-block w-100 img-design" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={project7t} className="d-block w-100 img-design" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouseld" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouseld" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="card-body">
                            <h5>Explore Football Clubs</h5>
                            <p className="card-text">Here users can see different teams and their information with logo, name. If user clicks on the explore button, they can see team's banner,  description and  then their social media link.</p>
                            <p>HTML, CSS, React Js, Bootstrap, API, Netlify</p>
                            <a href="https://6049f6dedf574174b889e31c--jolly-dubinsky-4ea9ad.netlify.app/" className="card-link">Live</a>
                            <a href="https://github.com/lubna201/Explore_football_team" className="card-link">Code</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row m-3 p-2 g-5 align-items-center justify-content-center">
                <div className="col-md-6 justify-content-center">
                    <div className="card" style={{ width: "100%", height: "100%" }}>
                        <div id="carouselh" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={project8f} className="d-block w-100 img-design" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={project8s} className="d-block w-100 img-design" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={project8t} className="d-block w-100 img-design" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselh" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselh" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="card-body">
                            <h5>Build Best Team</h5>
                            <p className="card-text">User can make their club with their favorite players. They can choose one player single time. If they click on add player, their expenses, players name, total players will be calculated.</p>
                            <p>HTML, CSS, React Js, Bootstrap, API, Netlify</p>
                            <a href="https://xenodochial-perlman-74ecfe.netlify.app/" className="card-link">Live</a>
                            <a href="https://github.com/lubna201/MakeTeam" className="card-link">Code</a>
                        </div>
                    </div>
                </div>


                <div className="col-md-6 justify-content-center">
                    <div className="card" style={{ width: "100%", height: "100%" }}>
                        <div id="carouselg" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={project4f} className="d-block w-100 img-design" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={project4s} className="d-block w-100 img-design" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={project4t} className="d-block w-100 img-design" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselg" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselg" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="card-body">
                            <h5>Pioneer Bank</h5>
                            <p className="card-text">Users can enter the bank system by their email and password. They can deposit and withdraw any amount. The amount will be calculated accordingly. It will show the total amount , deposit and withdrawal amount.</p>
                            <p>HTML, CSS , Bootstrap.</p>
                            <a href="https://lubna201.github.io/Pioneer-bank/" className="card-link">Live</a>
                            <a href="https://github.com/lubna201/Pioneer-bank" className="card-link">Code</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row m-3 p-2 g-5 align-items-center justify-content-center">
                <div className="col-md-6 justify-content-center">
                    <div className="card" style={{ width: "100%", height: "100%" }}>
                        <div id="carousele" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={project5f} className="d-block w-100 img-design" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={project5s} className="d-block w-100 img-design" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={project5t} className="d-block w-100 img-design" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carousele" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carousele" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="card-body">
                            <h5>Happy Miau Products</h5>
                            <p className="card-text">A simple project on a products for pet.Users can see the instruction of how to use the products. They can see blogs. They can know more about the company.</p>
                            <p>HTML, CSS, Javascript.</p>
                            <a href="https://lubna201.github.io/projects4-work-/#" className="card-link">Live</a>
                            <a href="https://github.com/lubna201/projects4-work-" className="card-link">Code</a>
                        </div>
                    </div>
                </div>


                <div className="col-md-6 justify-content-center">
                    <div className="card" style={{ width: "100%", height: "100%" }}>
                        <div id="carouself" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={project6f} className="d-block w-100 img-design" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={project6s} className="d-block w-100 img-design" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={project6t} className="d-block w-100 img-design" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouself" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouself" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="card-body">
                            <h5>Calculator</h5>
                            <p className="card-text">Users can calculate basic calculations. They can calculate addition, subtraction, multiplication, division. Also can erase all the calculation ,then start again</p>
                            <p>HTML, CSS, Bootstrap.</p>
                            <a href="https://lubna201.github.io/Calculator-practice/" className="card-link">Live</a>
                            <a href="https://github.com/lubna201/Calculator-practice" className="card-link">Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioMain;