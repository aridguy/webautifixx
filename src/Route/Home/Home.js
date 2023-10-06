import React from "react";
import Navbar from "../../Components/Navbar";
import Wallets from "../../Components/Wallets";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      {
        // AFTER NAVIGATION BAR
        <div>
          <div className="container mb-5">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8 text-center mt-5">
                <div className="titlePlace black mt-5">
                  <h1>Wallet Authentication</h1>
                  <p className="txt1">
                    Open protocol for connecting Wallet to Dapps
                  </p>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>

            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8 text-center mt-5">
                <div className="titlePlace black mt-3">
                  <img
                    src="http://localhost/webautofix/assets/banners.png"
                    alt="logo-place"
                    width="100%"
                  />
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>

            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8 text-center mt-2">
                <div className="titlePlace black mt-3">
                  <h1 className="bold-700">Wallet</h1>
                  <p className="txt2 ">
                    Multiple iOS and Android wallets support the WallectConnect
                    protocol. Interaction between mobile apps and mobile
                    browsers are supported via mobile deep linking
                  </p>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8"></div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      }

      {
        // WALLET ICON SECTUIONS
        <div>
          <Wallets />
        </div>
      }

      {
        // footer component here
        <div>
          <Footer />
        </div>
      }
    </div>
  );
};

export default Home;
