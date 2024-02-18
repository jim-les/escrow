import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import "./style.css";

// TradeCards component representing a single trade card
const TradeCards: React.FC<{ trade: { seller: string; status: string; sellingInfo: string; } }> = ({ trade }) =>{
    return (
        <div className="sells_card d-flex">
            <div>
                <div className="seller">Seller: {trade.seller}</div>
                <div>Status: {trade.status}</div>
            </div>

            <div style={{color: "red"}}>
                {trade.sellingInfo}
            </div>

            <div className='selling_btn'>
                <button>Buy</button>
            </div>
        </div>
    )
}

// Trade component representing the trading interface
const Trade: React.FC = () => {
    const [selectedCoin, setSelectedCoin] = useState('');
    const [sellAmount, setSellAmount] = useState('');
    const [sellPrice, setSellPrice] = useState('');
    const [trades, setTrades] = useState<Array<{ seller: string; status: string; sellingInfo: string; }>>([]);

    // Function to add a new trade
    const addTrade = () => {
        if (selectedCoin && sellAmount && sellPrice) {
            const newTrade = {
                seller: 'Jim Leston', // You can replace this with the actual seller
                status: 'New', // You can set the status as needed
                sellingInfo: `Selling ${sellAmount} ${selectedCoin} @ $${sellPrice}/=`
            };
            setTrades([...trades, newTrade]);
            // Reset form fields after adding the trade
            setSelectedCoin('');
            setSellAmount('');
            setSellPrice('');
        } else {
            alert('Please fill out all fields.');
        }
    };

    return (
        <div className='trade-page'>
            <div>
                <h3>P2P Trade</h3>
                <p>Trade your coin with sellers in the mainnet or send to beloved ones</p>

                <div className="available_sells_trade">
                    {/* Map over the trades array to render TradeCards components */}
                    {trades.map((trade, index) => (
                        <TradeCards key={index} trade={trade} />
                    ))}
                </div>
            </div>

            <div className="trade">
                <h1>Trade</h1>
                <button className='trade_btn'>Trade</button>

                <div className="trade_widget">
                    <div style={{display: "flex", gap: "5px"}}>
                        <button className='trade_button'>Sell</button>
                        <button className='trade_button'>Send</button>
                    </div>

                    {/* Selling tab */}
                    <div>
                        <p><b>Select the coin to sell</b></p>
                        <Select
                            value={selectedCoin}
                            onChange={(e) => setSelectedCoin(e.target.value as string)}
                            label="Select an option"
                            className="custom-textfield"
                            sx={{
                                width: '100%',
                                '& .MuiInputLabel-root': {
                                    color: 'white',
                                },
                            }}
                        >
                            <MenuItem value="">Select your coin to sell</MenuItem>
                            <MenuItem value="ICP">ICP</MenuItem>
                            <MenuItem value="BTC">BTC</MenuItem>
                            <MenuItem value="ECW">ECW</MenuItem>
                        </Select>

                        <p>Enter amount to sell</p>
                        <TextField
                            value={sellAmount}
                            onChange={(e) => setSellAmount(e.target.value)}
                            id="sell-amount"
                            label="Enter amount"
                            variant="outlined"
                            className="custom-textfield"
                            sx={{ width: "100%"}}
                        />

                        <p>Enter Price to sell</p>
                        <TextField
                            value={sellPrice}
                            onChange={(e) => setSellPrice(e.target.value)}
                            id="sell-price"
                            label="Enter price"
                            variant="outlined"
                            className="custom-textfield"
                            sx={{ width: "100%"}}
                        />

                        <button onClick={addTrade} className='trade_button_btn'>Trade</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trade;
