const WalletInfo = ({ address, provider }) => {
  return (
    <div className="pt-16">
      <h3 className="text-xl font-light font-family monospace">connect to wallet</h3>
      <p className="pt-3 text-l font-light font-family monospace">logged in as {address}</p>
    </div>
  );
};

export default WalletInfo;