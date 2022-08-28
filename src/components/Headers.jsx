import { useContext } from "react";
import { NetworkContext } from "../App";
//import EthereumSVG from "../assets/ethereum.svg";
import EthereumSVG from "../assets/dogechain.png";

const Header = ({ address }) => {
  const networkContext = useContext(NetworkContext);
  return (
    <div class="text-center sm:text-left">
      <div className="flex space-between">
        <img
          src={EthereumSVG}
          style={{
            width: "64px",
            height: "64px",
            marginLeft: "0px",
          }}
          alt="Dogechain logo"
        />
        <h2 className="mt-8 text-4xl font-light">D i s p e r s e</h2><br></br>
        <p>Much wow!</p><br></br>
        {address && (
          <span className="text-l pt-2 font-light">
            {networkContext.network || "🤔"}
          </span>
        )}
      </div>
      <div></div>
      <p className="pt-8 text-l font-light">
        Distribute WDOGE or tokens to multiple addresses on <a href="https://dogechain.dog">Dogechain</a>
      </p>
    </div>
  );
};

export default Header;