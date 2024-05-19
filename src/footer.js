import React from 'react';
import svg1 from './images/x.svg';
import svg2 from './images/opensea.svg';
import svg3 from './images/discord.svg';
import fcrt from './images/faces.png';


function Footer() {
  return (
    <footer className="mt-5 mb-5">
      <div className="container pt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-2">
                <div>
                  <img src={fcrt} alt="" className="img-fluid" />
                </div>
                
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-2">
              <div className='d-none'>
                <div>
                  <button className="mt-3 _0foot">Collective</button>
                </div>
                <div className="mt-2">
                <button className="mt-3 _0foot">Faces.art</button>
                </div>
                <div className="mt-2">
                <button className="mt-3 _0foot">Oddities</button>
                </div>
                <div className="mt-2">
                <button className="mt-3 _0foot">Mythnics</button>
                </div>
                </div>
              </div>
              <div className="col-lg-2">
              <div className='d-none'>
                <div>
                <button className="mt-3 _0foot">Grails</button>
                </div>
                <div className="mt-2">
                <button className="mt-3 _0foot">Contact Us</button>
                </div>
                <div className="mt-2">
                <button className="mt-3 _0foot">Podcast</button>
                </div>
                <div className="mt-2">
                <button className="mt-3 _0foot">Shop</button>
                </div>
                </div>
              </div>
              <div className="col-lg-2">
              <div className='d-none'>
                <div>
                <button className="mt-3 _0foot">Careers</button>
                </div>
                <div className="mt-2">
                <button className="mt-3 _0foot">Documentation</button>
                </div>
                <div className="mt-2">
                <button className="mt-3 _0foot">Privacy Policy</button>
                </div>
                <div className="mt-2">
                <button className="mt-3 _0foot">Terms of Use</button>
                </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="text-md-end text-start">
                  <img src={svg1} alt="" />
                  <img src={svg2} alt="" className="mx-3"/>
                  <img src={svg3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
