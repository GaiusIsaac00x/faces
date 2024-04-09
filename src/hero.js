import React from 'react';
import img1 from './images/img1.png';
import svg1 from './images/x.svg';
import svg2 from './images/opensea.svg';
import svg3 from './images/discord.svg';


function Hero() {
  return (
    <section className="hero mt-5">
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-11 bgcus">
          <div className="text-center">
            <img src={img1} alt="" width="70px" />
          </div>
          <h6 className="text-center _0col mt-5">COLLECTION</h6>
          <h6 className="text-center _0fac text-white">Faces.Art</h6>
          <div className="text-center mt-4">
            <img src={svg1} alt="" />
            <img src={svg2} alt="" className="mx-4" />
            <img src={svg3} alt="" />
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-lg-4">
          <div className="text-center">
            <button className="_0abt">About</button>
            <button className="mx-3 _0abt">Dashboard</button>
            <button className="_0abt">Rewards</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Hero;
