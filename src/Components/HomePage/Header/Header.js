import React from 'react';
import './Header.css';
import photo from '../../../images/photo.png';
import Particles from 'react-particles-js';
import pdf from '../../../Sazida.pdf';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container row mt-5 pt-5 gx-5 d-flex align-items-center justify-content-center flex">
            <div className="col-md-6 text-white" >
                <h6>Hello, I'm</h6>
                <h2 style={{ color: "#0dcaf0" }}>Sazida Sultana Binte Jamal</h2>
                <h5 className=" lh-base">An enthusiastic frontend developer. I love taking on challenges and learning new concepts.</h5>
                <div className="d-flex" >
                    <button type="button" className="btn btn-info text-white fw-bold fs-5"><a href={pdf} download style={{ textDecoration: 'none', color: 'white' }}>Download Resume</a></button>
                    <button className="btn btn-info  fw-bold fs-5 ms-1" type="button"><Link className="text-white" to="/aboutMe">About Me</Link></button>
                    <button className="btn btn-info  fw-bold fs-5 ms-1" type="button"><Link className="text-white" to="/contact">Get In Touch</Link></button>
                </div>
            </div>
            <div className="col-md-6">
                <img src={photo} alt="" style={{width:"100%"}}></img>
            </div>
            <div style={{ position: "absolute", zIndex: "-1" }}>
                <Particles />
            </div>
        </div>
    );
};

export default Header;