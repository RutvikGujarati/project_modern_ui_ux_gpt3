import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is FairElection"
        text="A fair election is a democratic process in which all eligible citizens have an equal opportunity to vote and to have their votes counted without interference or coercion. Fair elections are characterized by a number of key principles."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        Vote for a better tomorrow , make a difference today!
      </h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Transparency"
        text="The election process is transparent and open to observation by independent observers, the media, and the public."
      />
      <Feature
        title="Ballot"
        text="A ballot is a form used in elections to indicate a voter's choice of candidate or measure. It is a piece of paper or electronic document on which a voter marks their preference in a private and accurate way."
      />
      <Feature
        title="Fairness"
        text=" A fair system is one that is based on objective criteria, where everyone has the same rights and is subject to the same rules, and where decisions are made without favoritism or prejudice."
      />
    </div>
  </div>
);

export default WhatGPT3;
