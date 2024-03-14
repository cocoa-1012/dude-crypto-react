/* eslint-disable jsx-a11y/no-redundant-roles */
import logo from './../../assets/img/logo.svg';
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { NavMobile } from '../../components/nav-moile';
function Header() {
  const [isOpen, setOpen] = useState(false);
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
          className="container-2"
        >
          <div className="navbar-wrapper">
            <a href="#home" className="navbar-brand w-nav-brand">
              <img src={logo} loading="lazy" alt="" />
              <h1 className="logo-text">dude</h1>
            </a>
            <NavMobile />
            <div className="menu-button w-nav-button">
              <Hamburger toggled={isOpen} size={30} toggle={setOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
