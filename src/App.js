import React from 'react';
// import Hero from './hero';
import Sections from './sections';
import slide1 from './images/slide1.jpeg';
import slide2 from './images/slide2.jpeg';
import slide3 from './images/slide3.jpeg';
// import Slider from './slider';
import Footer from './footer';
import logo from './images/img1.png';
import facex from './images/facex.png';
// import rect2 from './images//rect2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/style.css';

function App() {
  return (
    <div >
      <div className="bgcus1 py-5 position-relative">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <img src={logo} alt="" width="40px" /> {/* Use imported image */}
          <span className='_0facez d-none'>FACES</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 ms-lg-5">
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle _0nav ms-lg-3" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
                  Documentations
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
                  Collections
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
                  Create
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
                  Earn
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><button className="dropdown-item">Action</button></li>
                  <li><button className="dropdown-item">Another action</button></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item">Something else here</button></li>
                </ul>
              </li>
            </ul>

            <form className="d-flex ms-md-3 d-none">
            <input className="form-control me-2 _0inp" type="search" placeholder="Search CTRK + K" aria-label="Search" />
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
          </form>
            <button className="_0auth px-3 py-2 mt-md-0 mt-3">Launch NewFaces</button>
          </div>
        </div>
      </nav>
      
      <section className="hero mt-5">
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="row justify-content-center">
          <div className="col-lg-7">
          <h1 className="_0fac text-white">Create unique identities with <span style={{ color: '#c58fff' }}>Faces</span>
 </h1>
 <p className="text-white">
              Welcome to Faces.art! Join us as Facers, where art lovers, creators, and earners meet. Our platform is more than just digital; it's a thriving community shaping the future of web3 art, beauty, and fashion.
                </p>
                <p className="text-white">
                Experience a cultural revolution and digital renaissance at Faces.art, where art transcends limits. We're redefining art ownership and appreciation, offering unparalleled experiences in crafting unique expressions.
                </p>
                <p className="text-white">
                Explore NFTs with us for seamless Creating, Collecting, and Earning!
                </p>
                <div className="mt-5">
                  <button className="_0btn btn w-100 fw-bold">CipherFace Minting Soon</button>
                </div>
          <div className="text-center mt-4">
           
          </div>
        </div>
        <div className="col-lg-5">
         {/* <div >
          <img src={rect1} alt="" className='legg'/>
         </div>
         <div className='pin2 d-lg-block d-md-none d-none'>
          <img src={rect2} alt="" style={{ width: '70%' }}/>
         </div> */}
  <img src={facex} alt="" className='w-100' />
        </div>
          </div>
        </div>
        </div>
    </div>
  </section>
    </div>
    </div>
    <section className='secrel mt-5'>
      <div className='container'>
         <div className='row'>
         <div className='col-lg-4 col-md-4'>
         <img src={slide1} className='w-100 rounded-4' alt=""/>
         </div>
         <div className='col-lg-4 col-md-4'>
         <img src={slide2} className='w-100 rounded-4' alt=""/>
         </div>
         <div className='col-lg-4 col-md-4'>
         <img src={slide3} className='w-100 rounded-4' alt=""/>
         </div>

         </div>
      </div>
  </section>

     {/* Render the Hero component */}
     <Sections />
     <Footer />
     
    </div>
    
  );

  
}

export default App;



