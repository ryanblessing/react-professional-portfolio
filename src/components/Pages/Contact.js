// eslint-disable-next-line no-unused-expressions
import React from "react"; 
import contactPhoto from "../../assets/photos/contact-page.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';




function Contact(){
    return (
        <div className="container-fluid row">
            <h1 className="display-3 text-center">Contact</h1>
            <div className="col align-items-start">
                <div>
                    <img src={contactPhoto} alt="contact/teamwork" id="contactPhoto"></img>    
                </div>
            </div>
            <div className="col" id="contact-form">
            <form className="container-sm"> 
                <div className="mb-2">
                    <label for="formControl" className="form-label">Email Address:</label>
                    <input type="email" className="form-control" id="exampleFormControl" placeholder="name@email.com" />
                </div>
                <div className="mb-2">
                    <label for="formControl"Text className="form-label">Message:</label>
                    <textarea className="form-control" id="formControlTextarea" rows="3" />
                </div>
            </form>
            </div>
        </div>
    )
}

export default Contact;
