import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">Unlock the potential of blockchain for a more equitable and efficient society !</h1>
      <p>Blockchain technology is a decentralized, distributed digital ledger that is used to record and verify transactions across multiple computers in a network. Each block in the chain contains a record of several transactions, and once a block is added to the chain, it cannot be altered or deleted. The technology was originally developed for use in cryptocurrencies such as Bitcoin, but it has since been adapted for use in a wide range of applications.</p>
    </div>
  </div>
);

export default Possibility;
