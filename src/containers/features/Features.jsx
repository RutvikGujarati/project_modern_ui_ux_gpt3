import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Transparency',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Accessibility',
    text: 'Blockchain-based voting systems can be designed to be more accessible to a wider range of voters, including those with disabilities or those who are geographically remote.',
  },
  {
    title: 'Decentralization',
    text: 'Blockchain-based voting systems can be decentralized, meaning that they do not rely on a single central authority or organization to operate. This can increase the security and trustworthiness of the system.',
  },
  {
    title: 'Immutable',
    text: 'Once a vote is recorded on the blockchain, it cannot be altered or deleted. This makes the system resistant to fraud and manipulation.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The power to make a difference is in your hands , use it wisely by voting!.</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
