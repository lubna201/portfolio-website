import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="mt-5 pt-5 text-center text-white">
            <div>
            <a href="https://github.com/lubna201" target="_blank" rel="noreferrer" style={{ fontSize: "45px"}}><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/sazida-sultana-binte-jamal-22b147203/" target="_blank" rel="noreferrer" className="ms-4" style={{ fontSize: "45px" }}><FontAwesomeIcon icon={faLinkedin} /></a>
            <p className="mt-3">Copyright All rights reserved. © {(new Date()).getFullYear()} Sazida Sultana Binte Jamal</p>
            </div>
        </div>
    );
};

export default Footer;