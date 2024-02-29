import React, { useState, useEffect } from 'react';
import { backend } from '@/declarations/backend';
import { Wallet } from '@/declarations/backend/backend.did';

export default function Test() {
  const [wallet, setWallet] = useState<Wallet | null>(null);

  // Function to call the createWallet function
  const createWallet = async () => {
    try {
      const newWallet = await backend.createWallet("user_name", "ICP", 100);
      setWallet(newWallet);
    } catch (error) {
      console.error("Error creating wallet:", error);
    }
  };

  useEffect(() => {
    // Call createWallet when the component mounts
    createWallet();
  }, []);

  return (
    <div className="body">
      <h1>Test</h1>
      {wallet && (
        <div>
          <p>Balance: {wallet.balance.toString()}</p>
          <p>Coin Symbol: {wallet.coin_symbol}</p>
          <p>Wallet Address: {wallet.wallet_address}</p>
          <p>Wallet ID: {wallet.wallet_id}</p>
        </div>
      )}
      <button onClick={createWallet}>Create Wallet</button>
    </div>
  );
}
