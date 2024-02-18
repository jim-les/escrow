import React from 'react';

// Icons used
import { TextField, InputAdornment } from '@mui/material';


// image imports 
import bitcoinIcon from "../../assets/bitcoin.png";
import internetComputerIcon from "../../assets/internet-computer.png";
import escrowIcon from "../../assets/mortgage-cheque.png";

const Overview: React.FC = () => {
    return (
        <div className="overview_content_container">

            {/* overview contents  */}
            <div className="overview_content">
                <div><h2>Revenue</h2></div>

                {/* sample coins cards */}
                <div className='sample_coins'>
                
                    {/* icp coins */}
                    <div className="sample_coins_cards">
                        <div className="coin_icon">
                            <img src={internetComputerIcon} alt="internetComputerIcon" className='internetComputerIcon' width={50}/>
                        </div>
                        <div className="coin_market">
                            <div className="coin_name"><b>ICP</b></div>
                            <div className="coin_market_value">98765678</div>
                        </div>
                    </div>

                    {/* bitcoin coins */}
                    <div className="sample_coins_cards">
                        <div className="coin_icon">
                            <img src={bitcoinIcon} alt="bitcoinicon" className='bitcoinicon' width={50}/>
                        </div>
                        <div className="coin_market">
                            <div className="coin_name">Bitcoins</div>
                            <div className="coin_market_value">455432234</div>
                        </div>
                    </div>

                    {/* Escrowcoins */}
                    <div className="sample_coins_cards">
                        <div className="coin_icon">
                            <img src={escrowIcon} alt="escrowicon" className='escrowicon' width={50}/>
                        </div>
                        <div className="coin_market">
                            <div className="coin_name">Escrowcoins</div>
                            <div className="coin_market_value">0</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* overview widgets */}

            <div className="overview_widgets">
                <div className="exchange_widget">
                    <div>
                        <p><b>Exchange</b></p>
                    </div>
                    <p><small>Send</small></p>

                    {/* exxchange coin from */}
                    <div className="exchange_coin_from">
                        <TextField
                            placeholder='1'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={bitcoinIcon} alt="" width={20}/>
                                    </InputAdornment>
                                ),
                                className: 'custom-textfield'
                            }}
                            InputLabelProps={{
                                style: { color: 'white' }
                            }}
                            sx={{ width: '100%' }}
                        />  
                    </div>

                    <div className="widget_hr">
                        <img src={bitcoinIcon} alt="" width={25}/>
                    </div>

                    {/* exxchange coin from */}
                    <div className="exchange_coin_from">
                        <TextField
                            placeholder='1'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={internetComputerIcon} alt="" width={1}/>
                                    </InputAdornment>
                                ),
                                className: 'custom-textfield w-100'
                            }}
                            InputLabelProps={{
                                style: { color: 'white' }
                            }}
                            sx={{ width: '100%' }}
                        />  
                    </div>

                    <div className='exhange_detailes_card'>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>Rate</div>
                            <div>1ICP -- 0.2345 BTC</div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <div>Route</div>
                            <div>Eth -Bust</div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <div>Exchange fees</div>
                            <div>0.3%</div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <div>Estimated Arrival</div>
                            <div>5-30 minutes</div>
                        </div>
                    </div>

                    <div className="exchange_button">
                        <button>Exchange</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
