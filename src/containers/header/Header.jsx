import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="FairElection__header section__padding" id="home">
    <div className="FairElection__header-content">
      <h1 className="gradient__text">Let&apos;s Experience Something amazing with Blockchain Based Election </h1>
      <p>Blockchain-based voting systems are designed to provide a secure, transparent, and immutable way to conduct elections, like Decentralization, Decentralization, Immutability, Security.</p>

      {/* <div className="FairElection__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div> */}

      <div className="FairElection__header-content__people">
        <img src={people} />
        <p>More than 100 people have voted at this platform</p>
      </div>
    </div>

    <div className="FairElection__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
