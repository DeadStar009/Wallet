import React from 'react';

const Hero = ({ onConnectWallet, isConnected }) => {
  const benefits = [
    {
      title: "Exclusive Airdrop",
      description: "All Priority Pass Holders get access to a good $SOUL airdrop"
    },
    {
      title: "Early Access",
      description: "Be amongst the first to claim your Solana ID and get priority access to solid perks"
    },
    {
      title: "Mint your Priority Pass",
      description: "Enjoy perks such as exclusive WL spots and more from our partners"
    }
  ];

  return (
    <div className="hero-container">
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <h3>{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
      <h1 className="hero-title">Get Soul Pass</h1>
      {!isConnected && (
        <button className="connect-button" onClick={onConnectWallet}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Hero;

