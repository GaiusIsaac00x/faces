import React from 'react';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img7 from './images/img7.png';
import img8 from './images/img8.png';
import img9 from './images/img9.png';
import img10 from './images/img10.png';
import img11 from './images/img11.png';
import img12 from './images/img12.png';
import img13 from './images/img13.png';
import img14 from './images/img14.png';
import imgx from './images/imgx.png';
import imgx2 from './images/imgx2.png';
import imgx3 from './images/imgx3.png';
import imgx4 from './images/imgx4.png';

function Sections(){
    return (

        <div>
        <section className="mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <h4 className="text-white _0who">WHO WE ARE</h4>
                <h1 className="text-white _0face mt-lg-5 mt-3">Faces.Art: An art collector's PFP</h1>
                <p className="text-white">
                  Welcome to Faces.art! Here, Facers unite as art collectors, creatives, and dreamers. Our platform isn't just a space—it's a vibrant community fostering genuine connections as we shape the future of web3 art, culture, and technology.
                </p>
                <p className="text-white">
                  Embrace the dawn of a cultural revolution, a digital renaissance where art transcends boundaries. Faces.art is at the forefront, redefining art ownership and appreciation. Our mission? To craft unparalleled experiences for collectors to forge bonds with artists, champion their works, and embark on an exhilarating journey together.
                </p>
                <p className="text-white">
                  Join us in painting the canvas of tomorrow and let's sprinkle some stardust along the way.
                </p>
                <div className="mt-5">
                  <button className="_0btn btn w-100 fw-bold">Browse Collection</button>
                </div>
              </div>
              <div className="col-lg-1 col-md-1"></div>
              <div className="col-lg-5 col-md-5">
                <div className="row">
                  <div className="col-lg-4 col-md-4 mt-3">
                    <img src={img3} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-4 col-md-4 mt-3">
                    <img src={img4} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-4 col-md-4 mt-3">
                    <img src={img5} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-4 col-md-4 mt-3">
                    <img src={img6} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-4 col-md-4 mt-3">
                    <img src={img7} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-4 col-md-4 mt-3">
                    <img src={img8} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-4 col-md-4 mt-3">
                    <img src={img9} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-4 col-md-4 mt-3">
                    <img src={img10} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-4 col-md-4 mt-3">
                    <img src={img11} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="mt-5 section2">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div>
              <h3 className="text-center">FACES.ART NFTS</h3>
              <h1 className="text-center">Art merged with tech</h1>
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <p className="text-center">Faces.art NFTs comprise a collection of 10,000 digital avatars, crafted by artist and FACES.ART co-founder Godspower Egbetamah. They are distributed under a creative commons (CC0) license, allowing every creative to utilize the artwork for building their own collections and products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section3 mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="_0cu pt-4 pb-4 px-5">
                  <h3 className="text-white">Fully “In-Chain”</h3>
                  <p className="text-white">The pixelated art is fully on-chain (aka “in-chain”)—meaning that the images are rendered directly from the Ethereum smart contracts. This unlocks a world of possibilities for customization.</p>
                  <img src={img12} className="img-fluid" alt="" />
                  <div className="mt-5">
                    <button className="_0btn btn w-100 py-2 fw-bold">Learn More</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="_0cu pt-4 pb-4 px-5">
                  <h3 className="text-white">Custom Features</h3>
                  <p className="text-white">Not only do we offer commemorative backgrounds by Faces.art artist, GP Egbetamah, but we also collaborate with artists like Divergent and Lucid for collectors of their work.</p>
                  <img src={imgx} className="img-fluid" alt="" />
                  <div className="mt-5">
                    <button className="_0btn btn w-100 py-2 fw-bold">Browse Collections</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section4 mt-5 mb-5">
      <div className="container pt-5 pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <h3>Exclusive</h3>
            <h1>Holder Benefits</h1>
            <div className="row mt-3">
              <div className="col-lg-4 col-md-6 mt-5">
                <h4>Customizable Avatars</h4>
                <p className="mt-4">Update your Faces.art's appearance based on your wallet's holdings or achievements within the PROOF ecosystem.</p>
              </div>
              <div className="col-lg-4 col-md-6 mt-5">
                <h4>Community Membership</h4>
                <p className="mt-4">Join the Faces.art community on Discord, on Twitter, and as a Collector on the PROOF art platform.</p>
              </div>
              <div className="col-lg-4 col-md-6 mt-5">
                <h4>Digital & IRL events</h4>
                <p className="mt-4"></p>
              </div>
              <div className="col-lg-4 col-md-6 mt-5">
                <h4>Nesting Rewards</h4>
                <p className="mt-4">As your Faces.art nests, you'll unlock exclusive goods to celebrate your holding time. Visit Nesting Rewards to learn more.</p>
              </div>
              <div className="col-lg-4 col-md-6 mt-5">
                <h4>Art & collectible drops</h4>
                <p className="mt-4">Enjoy digital drops exclusively for the Faces.art, from Oddities and Mythics to our upcoming Diamond Exhibition.</p>
              </div>
              <div className="col-lg-4 col-md-6 mt-5">
                <h4>BB Society membership</h4>
                <p className="mt-4">Activate creative entrepreneurship with the Lunar Society; home of the Faces.art' and Mythics' community builders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section5">
      <div className="container">
        <div className="row">
          <div className="col-lg-11">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="text-center">
                  <img src={img13} alt="" className="img-fluid" width="80%" />
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-6">
                <h3>Driven By Community</h3>
                <h1>Face Art Society (FAS)</h1>
                <p>The Face Art Society is our rendition of a DAO: a builders club and grant program for community members, orchestrated (and funded) by the PROOF team, but governed by you. Its objectives are twofold—to advance the Faces.art and Mythics brands, and to enrich the holder experience. All Faces.art holders are automatically voting (and proposing, if you opt to be) members of the Face Art Society.</p>
                <div className="mt-5">
                  <button className="_0btn btn w-100">About FAS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mt-5 section6">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <h3 className="text-center" style={{ color: 'rgba(235, 216, 255, 1)' }}>Proof of Curation</h3>
          <div className="col-lg-5">
            <p className="text-center text-white" style={{ marginTop: '70px' }}>Over the coming months we're upping the ante on our art offering for the birds, which has until now been mostly reserved for their “elder sibling” the PROOF Collective. Stay tuned…</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="row mt-5">
              <div className="col-lg-6 col-md-6">
                <div className="_0cu py-5 px-5">
                  <h4 className="text-center" style={{ color: 'rgba(235, 216, 255, 1)' }}>Artist Profiles</h4>
                  <div className="d-flex align-items-center mt-5">
                    <div>
                      <img src={img14} alt="" width="70px" height="70px" />
                    </div>
                    <div className="ms-3">
                      <h5 className="text-white">Anna Delvey</h5>
                      <h6 style={{ color: 'rgba(235, 216, 255, 1)' }}>Artist</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <div>
                      <img src={imgx2} alt="" width="70px" height="70px" />
                    </div>
                    <div className="ms-3">
                      <h5 className="text-white">Brian Cranston</h5>
                      <h6 style={{ color: 'rgba(235, 216, 255, 1)' }}>Artist</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <div>
                      <img src={imgx3} alt="" width="70px" height="70px" />
                    </div>
                    <div className="ms-3">
                      <h5 className="text-white">Iris West-Allen</h5>
                      <h6 style={{ color: 'rgba(235, 216, 255, 1)' }}>Artist</h6>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="_0btn btn w-100 fw-bold py-2">Browse All Artists</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="_0cu py-5 px-5">
                  <h4 className="text-center" style={{ color: 'rgba(235, 216, 255, 1)' }}>Curated Exhibitions</h4>
                  <div className="mt-5 pt-3">
                  <img src={imgx4} alt="" className="img-fluid" />
                  </div>
                  <div className="mt-5 pt-2">
                    <button className="_0btn btn w-100 fw-bold py-2">View Platinum Exhibition</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>

    

    );
}

export default Sections;