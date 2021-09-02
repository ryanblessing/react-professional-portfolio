import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFontAwesome } from '@fortawesome/free-brand-svg-icons';

const Footer = () => {
    library.add(fas, faInstagram)

    return (
        <div>
            <footer>
                <ul>
                   <li>
                       <fontAwesomeIcon icon="fa-brand faInstagram"/></li>
                  
                </ul>
            </footer> 
        </div>
    )
}

export default Footer
