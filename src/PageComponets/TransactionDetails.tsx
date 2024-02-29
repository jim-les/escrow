import React from 'react'
import { SettingsIcon } from 'lucide-react';
import Dashboard from '@mui/icons-material/Dashboard';
import { UserIcon } from 'lucide-react';
import { Button } from '@mui/material';
import { DollarSignIcon } from 'lucide-react';
import { SearchIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function TransactionDetails() {
    const navigate = useNavigate();  
    return (
        <div className='transactionDetails'>
            <div className="topbar">
                <div className="section_topbar">
                    <Dashboard />
                    <h2>CyberEscrow</h2>
                </div>
                <div className="section_topbar">
                    <SettingsIcon />
                    <UserIcon />
                </div>
            </div>

            <div className="main_content">
                <div className="transaction_card_container">
                    <h1><b>Transactions Details</b></h1>
                    <div className="trabsaction_list">
                        <div className="transaction_card">
                            <div className="trabsaction_card_img">
                                <UserIcon style={{fontSize:"100px"}}/>
                            </div>

                            <div>
                                <h2 className='buyer_name'>Joe Doe</h2>
                                <h4 style={{color:"gray"}}>Buyer</h4>
                            </div>
                        </div>

                        <div className="transaction_card">
                            <div className="trabsaction_card_img">
                                <UserIcon style={{fontSize:"100px"}}/>
                            </div>

                            <div>
                                <h2 className='buyer_name'>Jane Smith </h2>
                                <h4 style={{color:"gray"}}>Seller</h4>
                            </div>
                        </div>
                       
                        <div className="transaction_card">
                            <div className="trabsaction_card_imgx">
                                <DollarSignIcon style={{fontSize:"100px"}}/>
                            </div>

                            <div>
                                <h2 className='buyer_name'>Amount</h2>
                                <h4 style={{color:"gray"}}>0.001 BTC</h4>
                            </div>
                        </div>

                        <div className="transaction_card">
                            <div className="trabsaction_card_imgx">
                                <SearchIcon style={{fontSize:"100px"}}/>
                            </div>

                            <div>
                                <h2 className='buyer_name'>Buyer's address</h2>
                                <h4 style={{color:"gray"}}>0x94fd...</h4>
                            </div>
                        </div>


                        <div className="transaction_card">
                            <div className="trabsaction_card_imgx">
                                <SearchIcon style={{fontSize:"100px"}}/>
                            </div>

                            <div>
                                <h2 className='buyer_name'>Seller's address</h2>
                                <h4 style={{color:"gray"}}>0x3j5k..</h4>
                            </div>
                        </div>
                    </div>

                    <div style={{display: "flex", gap: "20px", justifyContent: "end", width: "100%"}}>
                        <Button variant="contained"  style={{marginTop:"20px", padding: "20px 30px"}}>
                            Cancel
                        </Button>
                        <Button variant="contained"  style={{marginTop:"20px", padding: "20px 30px"}}>
                            Confirm
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

