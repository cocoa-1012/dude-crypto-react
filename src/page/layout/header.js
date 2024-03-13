/* eslint-disable jsx-a11y/no-redundant-roles */
import logo from './../../assets/img/logo.svg'
function Header() {
  return (
    <div className="navbar-logo-left">
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease-in-out"
        data-easing2="ease-in-out"
        role="banner"
        className="navbar-logo-left-container shadow-three w-nav"
      >
        <div
          // data-w-id="4982ae7b-926b-0255-4b2b-722ac87daf74"
          className="container-2"
        >
          <div className="navbar-wrapper">
            <a href="#home" className="navbar-brand w-nav-brand">
              <img src={logo} loading="lazy" alt="" />
              <h1 className="logo-text">dude</h1>
            </a>
            <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
              <ul role="list" className="nav-menu-two w-list-unstyled">
                <li>
                  <a href="https://corgi.gitbook.io/corgisol/"
                    target="_blank"
                    className="nav-link" rel="noreferrer"
                  >
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a href="#about" className="nav-link">
                    about
                  </a>
                </li>
                <li>
                  <a href="#tokenomics" className="nav-link">
                    tokenomics
                  </a>
                </li>
                <li>
                  <a href="#how-to" className="nav-link">
                    how to buy
                  </a>
                </li>
                <li>
                  <a href="#utilities" className="nav-link">
                    utilities
                  </a>
                </li>
                {/* <li className="mobile-margin-top-10"> */}
                  {/* <div className="button1 main"> */}
                    <a
                      href="https://raydium.io/swap/?outputCurrency=GDisrnbVWjKJuAVqeWfYd9zMyV9gP7gXb3FQfd8xbKuM"
                      target="_blank"
                      className="button w-inline-block" rel="noreferrer"
                    >
                      <h1 className="button-text main">buy me</h1>
                    </a>
                  {/* </div> */}
                {/* </li> */}
              </ul>
            </nav>
            <div className="menu-button w-nav-button">
              <div className="icon w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
