import React from 'react'
import Button from '@mui/material/Button';
export default function CreateTrade() {
    return (
        <div className="create a trade-container">
             <div className="topbar d-flex">
                <div className='d-flex-gap'>
                    <div className="dot"></div>
                    <h2>Crypto Trade</h2>
                </div>

                <div className="d-flex-gap">
                    <div>
                        <ul className='nav-bar'>
                            <li>Buy</li>
                            <li>Send</li>
                            <li>Convert</li>
                            <li>Receive</li>
                        </ul>
                    </div>
                    <div className='d-flex-gap'>
                        {/* Button to create wallet and create account */}
                        <Button variant="contained">Create Wallet</Button>
                        <Button variant="contained">Create Account</Button>
                    </div>

                    <div className="transaction_card_img">
                    </div>
                </div>
            </div>
        </div>
    )
}
