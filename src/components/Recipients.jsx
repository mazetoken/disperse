const Recipients = ({ tokenSymbol, textValue, setTextValue }) => {
  return (
    <div className="pt-16">
      <h3 className="text-xl font-light font-family monospace">Recipients and amounts</h3>
      <p className="pt-3 text-l font-light">
        Enter one address and amount in {tokenSymbol} on each line.
      </p>
      <textarea
        spellCheck="false"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        className="block border-b-2 border-black outline-none px-2 py-2 mt-4 h-32"
        style={{
          width: "100%",
          background: "aquamarine",
          color: "black",
        }}
        placeholder="0x2b1F577230F4D72B3818895688b66abD9701B4dC,1.41421"
      ></textarea>
      <br></br><br></br>
    </div>
  );
};

export default Recipients;