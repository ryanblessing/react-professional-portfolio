import React from 'react'

const Footer = () => {
    

    return (
        <div className="container-fluid">

            <footer id="footerStyle">
            <nav class="nav nav-pills flex-column flex-md-row">
                <a class="flex-sm-fill text-sm-center nav-link" aria-current="page" href="https://github.com/ryanblessing">
                    <ion-icon size="large" name="logo-github"></ion-icon></a>
                <a class="flex-sm-fill text-sm-center nav-link" href="https://www.linkedin.com/in/ryan-blessing89/">
                    <ion-icon size="large" name="logo-linkedin"></ion-icon>
                </a>  
                <p>@2021 by Ryan</p>              
            </nav>

            </footer>
            {/* <footer className="navbar navbar-expand-md justify-content-around" id="footerStyle">
                <div id="logo">
                    <ul className="nav-items" id="logo" > 
                        <a className="btn" href="https://github.com/ryanblessing" type="button"><ion-icon size="large" name="logo-github"></ion-icon></a>  
                    </ul>
                </div>
                <div id="logo">
                    <ul id="logo">
                       <a className="btn" href="https://www.linkedin.com/in/ryan-blessing89/"><ion-icon size="large" name="logo-linkedin"></ion-icon></a>
                    </ul>
                </div>
                <div id="logo">
                    <p id="logo">@2021 by Ryan</p>
                </div>
            </footer>  */}
        </div>
    )
}

export default Footer
