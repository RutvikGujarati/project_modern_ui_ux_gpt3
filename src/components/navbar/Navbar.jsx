import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../logo.svg';
import './navbar.css';

async function connect() {
  if (window.ethereum) {
  // Do something
  } else {
    alert('install metamask extension!!');
  }
  window.ethereum.request({ method: 'eth_requestAccounts' })
    .then((res) => {
    // Return the address of the wallet
      console.log(res);
    });
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="FairElection__navbar">
      <div className="FairElection__navbar-links">
        <div className="FairElection__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wFairElection">What is FairElection?</a></p>
          <p><a href="#possibility">BlockChain</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="FairElection__navbar-sign">
        <button type="button" onClick={connect}>MetaMask</button>
      </div>
      <div className="FairElection__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="FairElection__navbar-menu_container scale-up-center">
          <div className="FairElection__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wFairElection">What is FairElection?</a></p>
            <p><a href="#possibility">BlockChain</a></p>
            <p><a href="#features">About Us</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="FairElection__navbar-menu_container-links-sign">
            {/* <button type="button">MetaMask</button> */}
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
