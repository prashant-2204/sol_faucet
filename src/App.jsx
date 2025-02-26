import './App.css';
import AirdropComp from './assets/AirdropComp';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/uQBCuK8gpz9yzN0hKXeezCgDDCti1hT-"} autoConnect>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="app-container">
            <header className="header">
              <h1>Solana Airdrop Dashboard</h1>
              <div className="wallet-controls">
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
            </header>
            <main className="main">
              <AirdropComp />
            </main>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;