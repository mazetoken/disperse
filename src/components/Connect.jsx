const Connect = ({ connect }) => {
  return (
    <div className="pt-16">
      
      <button
        onClick={connect}
        className="px-2 mt-6 p-2 font-family monospace"
        style={{
          background: "aquamarine",
          boxShadow: "6px 6px crimson",
        }}
      > Connect wallet
      </button>
      <br></br>
      <p className="mt-6">Reload the page if it is not connected. Woof-woof!</p>
    </div>
  );
};

export default Connect;