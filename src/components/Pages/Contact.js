// eslint-disable-next-line no-unused-expressions
import React from "react"; 
import contactPhoto from "../../assets/photos/contact-page.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';


function Contact(){
    return (
        <div className="container">
            <h1>Contact</h1>
            <div>
                <img src={contactPhoto} alt="contact/teamwork"></img>
            </div>
            <form>
                <div className="mb-3">
                    <label for="formControl" className="form-label">Email Address:</label>
                    <input type="email" className="form-control" id="exampleFormControl" placeholder="name@email.com" />
                </div>
                <div className="mb-3">
                    <label for="formControl"Text className="form-label">Message:</label>
                    <textarea className="form-control" id="formControlTextarea" rows="3" />
                </div>
            </form>
        </div>
    )
}

export default Contact;
