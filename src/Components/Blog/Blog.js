import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className=" container mt-5 pt-5">
            <h1 className="text-center text-white mt-5 pt-5">Blogs</h1>
            <section className="cards-wrapper">
                <div className="card-grid-space">
                    <div className="num">01</div>
                    <a className="card" target="_blank" href="https://lubnasazida.medium.com/javascript-b2b711b4885e" id="id1">
                        <div>
                            <h1 className="ps-3 pt-3 text-dark">Javascript</h1>
                            <div className="ps-3 text-dark"><h3>Click To read the blog</h3></div>
                        </div>
                    </a>
                </div>
                <div className="card-grid-space mt-5">
                    <div className="num">02</div>
                    <a className="card img-fluid" target="_blank" href="https://lubnasazida.medium.com/react-project-deploy-on-netlify-without-connecting-to-git-a643a6f28558" id="id2">
                        <div>
                            <h1 className="ps-3 pt-3 text-dark">React Project deploy on Netlify</h1>
                            <div className="ps-3 text-dark"><h3>Click To read the blog</h3></div>
                        </div>
                    </a>
                </div>
                <div className="card-grid-space">
                    <div className="num">03</div>
                    <a className="card" target="_blank" href="https://lubnasazida.medium.com/little-things-about-javascript-6cd0ec24bfb" id="id3">
                        <div>
                        <h1 className="ps-3 pt-3 text-dark">Little things about Javascript</h1>
                            <div className="ps-3 text-dark"><h3>Click To read the blog</h3></div>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Blog;