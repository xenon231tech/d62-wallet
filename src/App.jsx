import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="container">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>D62 Wallet</h1>

        <p className="subtitle">
          Native Wallet For Base Ecosystem
        </p>

        <div className="balance-card">
          <span>Total Balance</span>
          <h2>0.000 ETH</h2>
        </div>

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
