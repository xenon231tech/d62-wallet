import { useState } from "react";
import { ethers } from "ethers";
import { motion } from "framer-motion";

export default function App() {
  const [wallet, setWallet] = useState(null);
  const [balance, setBalance] = useState("0");

  async function connectWallet() {
    try {
      if (!window.ethereum) {
        alert("Install MetaMask");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);

      await provider.send("eth_requestAccounts", []);

      const signer = await provider.getSigner();

      const address = await signer.getAddress();

      const rawBalance = await provider.getBalance(address);

      const ethBalance = ethers.formatEther(rawBalance);

      setWallet(address);
      setBalance(Number(ethBalance).toFixed(4));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>D62 Wallet</h1>

        <p className="subtitle">
          Native Wallet For Base Ecosystem
        </p>

        <div className="balance-card">
          <span>Total Balance</span>
          <h2>{balance} ETH</h2>
        </div>

        {!wallet ? (
          <button
            className="connect-btn"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        ) : (
          <div className="wallet-address">
            {wallet.slice(0, 6)}...
            {wallet.slice(-4)}
          </div>
        )}

        <div className="actions">
          <button>Send</button>
          <button>Receive</button>
          <button>Swap</button>
        </div>

        <div className="network">
          Connected to Base Network
        </div>
      </motion.div>
    </div>
  );
}
