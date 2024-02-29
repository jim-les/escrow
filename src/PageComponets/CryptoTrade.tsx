import React, { useState } from 'react';
import { SearchIcon, DotSquareIcon, UserIcon } from 'lucide-react';
import { Notifications, Message } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Image from '../assets/INT_Blockchain-Blog_BLOG_HEADER.webp'
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { BitcoinIcon } from 'lucide-react';
interface CoinProps {
    amount: string;
    price: string;
}

const CryptoTrade: React.FC = () => {
    const [filterText, setFilterText] = useState('');
    const [selectedTab, setSelectedTab] = useState(0);
    const navigate = useNavigate();
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setSelectedTab(newValue);
    };
  
    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(event.target.value);
    };

    const handleFilter = () => {
        // Implement your filter logic here
    };

    return (
        <div className='crypto-trade'>
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
                        <div className="icon_cont">
                            <SearchIcon />
                        </div>
                        <div className="icon_cont">
                            <Notifications />
                        </div>
                        <div className="icon_cont">
                            <Message />
                        </div>
                        <div className="icon_cont">
                            <DotSquareIcon />
                        </div>
                    </div>

                    <div className="transaction_card_img">
                        <UserIcon style={{fontSize:"100px"}}/>
                    </div>
                </div>
            </div>

            <div className="main_content d-flex-center">
                <div>
                    <h2>Node Market</h2>
                    <div className="add_ads_section d-flex">
                        <div className="ads_card" style={{padding: "10px 20px", fontWeight: "800"}}>
                            <div className="d-flex">
                                <h3><b>Trending</b></h3>
                                <p className="primary">
                                    <small>More <KeyboardArrowRight /> </small>
                                </p>
                            </div>
                            <hr />
                            <div className="trending_coins_list d-flex">
                                <div className='d-flex-gap'>
                                    <span>1</span>
                                    <div>BIT COIN</div>
                                </div>
                                <span style={{color: "blue"}}>
                                    5.33%
                                </span>
                            </div>
                            <div className="trending_coins_list d-flex">
                                <div className='d-flex-gap'>
                                    <span>2</span>
ICP                                </div>
                                <span style={{color: "blue"}}>
                                    2.93%
                                </span>
                            </div>
                            <div className="trending_coins_list d-flex">
                                <div className='d-flex-gap'>
                                    <span>3</span>
                                    <div>PEPE COIN</div>
                                </div>
                                <span style={{color: "red"}}>
                                    5.33%
                                </span>
                            </div>

                        </div>

                        <div className="ads_card" style={{padding: "10px 20px", fontWeight: "800"}}>
                            <div className="d-flex">
                                <h3><b>Newly Added</b></h3>
                                <p className="primary">
                                    <small>More <KeyboardArrowRight /> </small>
                                </p>
                            </div>
                            <hr />
                        </div>

                        <div className="ads_card">

                        </div>
                        
                    </div>

                    <div className="tabs">
                        <Tabs
                            value={selectedTab}
                            onChange={handleChange}
                            aria-label="currency tabs"
                            style={{ padding: "30px 0" }}
                            >
                            <Tab label="ERC" style={{ color: "white"}} />
                            <Tab label="WLD"  style={{ color: "white"}}/>
                            <Tab label="ICP"  style={{ color: "white"}}/>
                            <Tab label="BTC"  style={{ color: "white"}}/>
                            <Tab label="ETH"  style={{ color: "white"}}/>
                            <Tab label="BNB"  style={{ color: "white"}}/>
                            <Tab label="USD"  style={{ color: "white"}}/>
                            <Tab label="USDT" style={{ color: "white"}} />
                        </Tabs>
                    </div>
                    <hr />

                    <AvailableCoin coin={{ amount: "0.001BTC", price: "$1000" }} />
                </div>
            </div>
        </div>
    )
}

const AvailableCoin: React.FC<{ coin: CoinProps }> = ({ coin }) => {
    const navigate = useNavigate();

    return (
        <div className="d-flex">
            <div className="d-flex-gap">
                <div className="icon_cont">
                    <DotSquareIcon />
                </div>
                <div>
                    <h5>{coin.amount}</h5>
                    <h6>{coin.price}</h6>
                </div>
            </div>

            <Button variant="contained" style={{ marginLeft: "auto" }} onClick={() => navigate('/transaction-details') } >Trade</Button>
        </div>
    )
}

export default CryptoTrade;
