// eslint-disable-next-line no-unused-expressions
import React from "react"; 
import contactPhoto from "../../assets/photos/contact-page.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';



function Contact(){
    return (
        <div className="container-fluid">
            <h1 className="display-3 text-center">Contact</h1>
            <div className="col justify-space-centerS">
                    <a className="btn btn-success" href="https://github.com/ryanblessing" role="button">GitHub</a>
                    <a className="btn btn-success" href="https://www.linkedin.com/in/ryan-blessing89/" role="button">linkedIn</a>
                <div>
                    <img src={contactPhoto} alt="contact/teamwork" id="contactPhoto"></img>    
                </div>
            </div>
            <div id="contact-form">
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
        </div>
    )
}

export default Contact;
