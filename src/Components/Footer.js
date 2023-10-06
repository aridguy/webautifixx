import React from "react";

const Footer = () => {
  return (
    <div className="footerSide">
      <footer className="text-center mt-5">
        <div className="container pt-4">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 text-center">
                <div className="row">
                <div className="col-md-4"><a href="https://discord.gg/jhxMvxP" target="_blank" rel="noreferrer" className="black cursor">Discord</a></div>
                <div className="col-md-4"><a href="https://twitter.com/walletconnect" target="_blank" rel="noreferrer" className="black cursor">Twitter</a></div>
                <div className="col-md-4"><a href="https://github.com/walletconnect" target="_blank" rel="noreferrer" className="black cursor">GitHub</a></div>
                </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>

        <div className="text-center text-dark p-3">
       
        </div>
      </footer>
    </div>
  );
};

export default Footer;
