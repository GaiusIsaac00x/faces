import React from 'react';
import Hero from './hero';
import Sections from './sections';
import Footer from './footer';
import logo from './images/img1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/style.css';

function App() {
  return (
    <div>
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <img src={logo} alt="" width="50px" /> {/* Use imported image */}
          <form className="d-flex ms-3">
            <input className="form-control me-2 _0inp" type="search" placeholder="Search CTRK + K" aria-label="Search" />
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
          </form>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle _0nav ms-lg-3" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
                  Community
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><button className="dropdown-item">Action</button></li>
                  <li><button className="dropdown-item">Another action</button></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item">Something else here</button></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle _0nav ms-lg-3" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
                  Art
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><button className="dropdown-item">Action</button></li>
                  <li><button className="dropdown-item">Another action</button></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item">Something else here</button></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle _0nav ms-lg-3" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
                  Media
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><button className="dropdown-item">Action</button></li>
                  <li><button className="dropdown-item">Another action</button></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item">Something else here</button></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle _0nav ms-lg-3" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><button className="dropdown-item">Action</button></li>
                  <li><button className="dropdown-item">Another action</button></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item">Something else here</button></li>
                </ul>
              </li>
            </ul>
            <button className="_0auth px-3 py-2">Sign In</button>
          </div>
        </div>
      </nav>
      
    </div>

     {/* Render the Hero component */}
     <Hero />
     <Sections />
     <Footer />
     
    </div>
    
  );

  
}

export default App;



