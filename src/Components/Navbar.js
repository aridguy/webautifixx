const Navbar = () => {
  return (
    <div>
      <nav className="container-fluid expand navars">
        <div className="container pt-4">
          <div className="row">
            <div className="col-md-2 text-center">
              <a className="black" href="https://github.com/walletconnect">Github</a>
            </div>
            <div className="col-md-2 text-center">
              <a className="black" href="https://github.com/walletconnect">Docs</a>
            </div>
            <div className="col-md-4 text-center">
              <img className="cursor" width='120' src='https://web3autofix.pages.dev/img/logo.37f2bc6e.svg' alt="site-logo" />
            </div>
            <div className="col-md-2 text-center">
              <a className="black" href="localhost:3000">Wallet</a>
            </div>
            <div  className="col-md-2 text-center">
              <a className="black" href="localhost:3000">Apps</a>
            </div>
          </div>
        </div>
      </nav>

      

    </div>
  );
};

export default Navbar;
