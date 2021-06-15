import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light p-2 fw-bold fs-5 mt-3 fixed-top" style={{backgroundColor:"rgb(27, 27, 27)"}}>
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold ms-5" href="/"><img src={logo} alt="" style={{ width: "30px" }}></img></a>
                    <button className="navbar-toggler me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{color:"white"}}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse me-5 justify-content-end text-white" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link ms-5 text-white" to="/" activeClassName="selected">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link ms-5 text-white" to="/aboutMe" activeClassName="selected">About Me</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link ms-5 text-white" to="/contact" activeClassName="selected">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link ms-5 text-white" to="/blog" activeClassName="selected">Blogs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link ms-5 text-white" to="/portfolio" activeClassName="selected">Projects</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link ms-5 text-white" to="/resume" activeClassName="selected"><button type="button" className="btn btn-info text-white fw-bold fs-5">Resume</button></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;