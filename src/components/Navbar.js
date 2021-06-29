import React from "react";

const Navbar = ()=> {
    return (
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark navbar-custom">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Anusha Saha</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link" aria-current="page" href="#projects">Projects</a>
                    <a class="nav-link" href="#research">Research</a>
                    <a class="nav-link" href="https://github.com/anushasaha16" target="_blank"><i class="fa fa-github" style={{fontSize: 30}}></i></a>
                    <a class="nav-link" href="https://www.linkedin.com/in/anushasaha/" target="_blank"><i class="fa fa-linkedin" style={{fontSize: 30}}></i></a>
                </div>
                </div>
            </div>
        </nav>
    );   
}

export default Navbar;