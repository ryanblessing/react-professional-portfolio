import React from 'react'
import runBuddy from '../../assets/photos/hero-bg.jpg';
import easyLink from '../../assets/photos/easyLink.png';
import top5 from '../../assets/photos/profilePic.png'
import grillPic from '../../assets/photos/grill.jpg'

const Projects = () => {

    return (
        <div>
            <div className="">
                <header>
                    <h1 className="display-3 text-center">Projects</h1>
                </header>
            </div>
            <div className="container-fluid">
                <div className="row row-cols-2 justify-content-around">
                        <div className="card col-4 rounded" style={{width:"40%"}} > 
                        <img src={runBuddy} alt="runBuddy" className="cardImg"/>                       
                            <div className="card-body">
                                <h5 className="card-title ">Run Buddy</h5>
                                <p className="card-text">Run buddy is a application that puts you
                                in touch with a fitness trainer, to help you achieve your fitness goals.</p>
                                <ul>
                                    <p>This Project was Created while using front end technologies such as:</p>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                                <a href="https://ryanblessing-35e74d648e.drafts.github.io/Run-Buddy/">Link here!</a>
                            </div>                           
                        </div>
                    <div className="card col-4 rounded" style={{width: "40%"}} >
                        
                            <img src={easyLink} alt="easyLink" id="EasyLinkPic"/>
                                <div className="card-body">
                                    <h5 className="card-title">Easy Link</h5>
                                    <p className="card-text">Easy Link was a group project I was apart of, thats purpose was to connect people to 
                                    other like-minded people. Helping them find new spots for food, drinks and entertainment. This is just the baseline of the App,
                                    and Future development is key for this to become a successful social networking system!</p>
                                    <ul>
                                        <p>In Easy-Link we used languages such as:</p>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JavaScript</li>
                                            <li>API's</li>
                                    </ul>
                                    <a href="https://ryanblessing.github.io/Group-project-1/">Link here!</a>
                                </div>                                      
                    </div>
                </div>
            </div>
            <br/>
            <div className="container-fluid">
                <div className="row row-cols-2 justify-content-around">
                        <div className="card col-4 rounded" style={{width:"40%"}} > 
                        <img src={top5} alt="crown" className="cardImg"/>                       
                            <div className="card-body">
                                <h5 className="card-title ">Top-5</h5>
                                <p className="card-text">Top 5 is a social media app that allows Users to create a Username, with a password.
                                Have there own personal page, and create a list of there Top 5 In any category they want! This app would be a vital
                                part of any company that makes suggestions. Example:</p>
                                <ul>
                                    <li>Netflix</li>
                                    <li>Disney Plus</li>
                                    <li>ticketMaster</li>
                                    <li>Expedia</li>
                                </ul>
                                <p>Any company that sells anything, WILL want to be a part of this App. </p>
                                <ul>
                                        <p>Top 5 was my first Test at a full on application, In this we used:</p>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JavaScript</li>
                                            <li>Express.js</li>
                                            <li>MySql</li>
                                            <li>Node</li>
                                            <li>Object Relational Mapping</li>
                                    </ul>
                                <a href="https://top-5-list.herokuapp.com/login">Link here!</a>
                            </div>                           
                        </div>
                    <div className="card col-4 rounded " style={{width: "40%"}}   >                       
                            <img src={grillPic} alt="food-festival" id="foodFest"/>
                                <div className="card-body">
                                    <h5 className="card-title">Food Festival</h5>
                                    <p className="card-text">Food Festival is a app that sold tickets to customers for a food event! Within this App
                                    you could sign up using your email, buy tickets and checkout there personalized calender to see what there schedule was!</p>
                                    <ul>
                                        <p>Food Festival is a company based Application. Used for events and ticket Sales.
                                            In this App we used languages and dependencies such as:</p>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JavaScript</li>
                                            <li>Web-packs</li>
                                            <li>service-workers</li>
                                            <li>JQuey</li>
                                            <li>Bootstrap</li>
                                    </ul>
                                  
                                    <a href="https://ryanblessing.github.io/Food-Festival/">Link here!</a>
                                </div>                                      
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Projects;
