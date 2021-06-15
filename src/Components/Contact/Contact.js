import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_p5ag00o', e.target, 'user_tdcDOBbbex8KKVryIMCzG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div className="container justify-content-center mt-5 pt-5">
            <h1 className="text-center mt-5 pt-5" style={{ fontSize: "50px", color: "#0dcaf0" }}>Get In Touch</h1>
                <h5 className="mt-5 mx-5 px-5 text-white" style={{ textAlign: "justify", textJustify: "inter-word" }} >I would Love to hear from you.Always available for work if the right project comes along. I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me!</h5>
                <form className="box mx-5 px-5 pt-3 contact-form" onSubmit={sendEmail}>
                    <div className="mb-3">
                        <input type="text" name="name" className="form-control fs-5" placeholder="Your Name" id="exampleInputname" aria-describedby="nameHelp" />
                    </div>
                    <div className="mb-3 mt-4">
                        <input type="email" name="email" className="form-control fs-5" placeholder="Your Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 mt-4">
                        <input type="text" name="subject" className="form-control fs-5" placeholder="Subject" id="exampleInputsubject" />
                    </div>
                    <div className="mb-3 mt-4">
                        <input type="text" name="message" className="form-control fs-5" placeholder="Your Message" style={{ height: "100px" }} id="exampleInputmessage" />
                    </div>
                    <div className="d-grid gap-2 mt-4">
                        <button className="btn btn-info fs-5" type="submit">Send</button>
                    </div>
                </form>
                <div className="d-flex row m-5 p-5">
                    <div className="col-md-6">
                        <h4 style={{ color: "#0dcaf0" }}>Email</h4>
                        <h5 className="text-white">lubnasazida@gmail.com</h5>
                    </div>
                    <div className="col-md-6">
                        <h4 style={{ color: "#0dcaf0" }}>Address</h4>
                        <h5 className="text-white">Shyamol Chhaya, Chattogram</h5>
                    </div>
                </div>
        </div>
    );
};

export default Contact;