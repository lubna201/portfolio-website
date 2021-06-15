import React from 'react';
import Header from '../../HomePage/Header/Header';
import './Home.css';
import Portfolio from '../../HomePage/Portfolio/Portfolio';
import Contact from '../../Contact/Contact';


const Home = () => {
    return (
            <div className="container justify-content-center mt-5 pt-5">
                <Header></Header>
                {/* <div className="d-flex justify-content-center" style={{marginTop:"500px"}}>
                <button type="button" className="btn btn-info text-white fw-bold fs-5"><a href={pdf} download style={{textDecoration:'none',color:'white'}}>Download Resume</a></button>
                <button className="btn btn-info px-4 fw-bold fs-5 ms-4" type="button"><Link className="text-white" to="/aboutMe">About Me</Link></button>
                <button className="btn btn-info px-4 fw-bold fs-5 ms-4" type="button"><Link className="text-white" to="/contact">Get In Touch</Link></button>
                </div> */}
                <Portfolio></Portfolio>           
            <Contact></Contact>
            </div>
    );
};

export default Home;