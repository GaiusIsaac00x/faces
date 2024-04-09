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
                  <img src={fcrt} alt="" className="img-fluid" /><br />
                  <span>© 2024 FACES.ART Holdings</span>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-2">
                <div>
                  <a href="" className="mt-3">Collective</a>
                </div>
                <div className="mt-2">
                  <a href="">Faces.Arts</a>
                </div>
                <div className="mt-2">
                  <a href="">Oddities</a>
                </div>
                <div className="mt-2">
                  <a href="">Mythics</a>
                </div>
              </div>
              <div className="col-lg-2">
                <div>
                  <a href="" className="mt-3">Grails</a>
                </div>
                <div className="mt-2">
                  <a href="">Contact Us</a>
                </div>
                <div className="mt-2">
                  <a href="">Podcast</a>
                </div>
                <div className="mt-2">
                  <a href="">Shop</a>
                </div>
              </div>
              <div className="col-lg-2">
                <div>
                  <a href="" className="mt-3">Careers</a>
                </div>
                <div className="mt-2">
                  <a href="">Documentation</a>
                </div>
                <div className="mt-2">
                  <a href="">Privacy policy</a>
                </div>
                <div className="mt-2">
                  <a href="">Terms of use</a>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="text-end">
                  <img src={svg1} alt="" />
                  <img src={svg2} alt="" />
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
