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
        </div>
    )
}

export default Footer
