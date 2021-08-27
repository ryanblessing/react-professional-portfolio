import Projects from "../Projects/projects";
import Contact from "../Contact/contact";
import About from "../About/about";
import React from 'react'

function Nav(props) {
        const {
          categories = [],
          setCurrentCategory,
          currentCategory,
        } = props;

        const handleClick = (item) => {
            console.log(item);
            return item;
          };

    return (
        <header>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Main</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="About">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Contact">Contact</a>
                    </li>
                </ul>
                </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav
