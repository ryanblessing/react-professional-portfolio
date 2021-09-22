import React, { useState } from 'react';
import Nav from './Nav';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Projects from './Pages/Projects.js';
import Home from './Pages/Home.js';
import Footer from './Footer';


function Portfolio() {
    const [currentPage, handlePageChange] = useState('Home');


    const renderPage = () => {
        // Add a switch statement that will return the appropriate component of the 'currentPage'
    // YOUR CODE HERE
    switch(currentPage){
        case 'About':
          return <About />;
        case 'Contact':
          return<Contact />;
          case 'Projects':
          return <  Projects />;
  
          default:
            return <Home />
      }
    }

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>
                {renderPage(currentPage)}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
        
    )
}

export default Portfolio;
