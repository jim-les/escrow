import React from 'react'
import "./style.css";
import defaultProfilePic from "../../assets/man.png";
import internetComputerIcon from "../../assets/internet-computer.png";

const Dashboard: React.FC = () => {
    return (
        <div>
            <div className="main-container">
                <div className="user-container">
                    <div className="avatar-container">
                    <img src={defaultProfilePic} alt="defaultprofilepic" className='defaultprofilepic'/>
                        <div className="avatar-container-details">
                        <p className="avatar-username">Jim Leston</p>
                        <small>UserId: esw122345678888765</small>
                        <p>Take a look at your dashboard</p>
                        </div>
                    </div>

                    <div className="user-container-actions">
                        {/* <p className="notification-icon"><BsBellFill /></p> */}
                    </div>

                    </div>

                    <div className="balance-container">
                        <h3>Balance</h3>
                        <p>2 ICP</p>
                        </div>

                        <div className="coin-prices-container">

                        <div className="coin-price-container">
                            <div className="coin-price-container-avatar">
                            <img src={internetComputerIcon} alt="coin-image" className="coin-price-container-avatar-img" />
                            <div className="coin-price-container-avatar-details">
                                <p className="coin-price-container-avatar-name">Internet Computer</p>
                                <p className="coin-price-container-avatar-abr">ICP</p>
                            </div>
                            </div>
                            <div className="coin-price-container-details">

                            <h2 className="coin-price-container-details-price">$69.33</h2>
                            </div>
                        </div>

                        <div className="coin-price-container">
                            <div className="coin-price-container-avatar">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" alt="coin-image" className="coin-price-container-avatar-img" />
                            <div className="coin-price-container-avatar-details">
                                <p className="coin-price-container-avatar-name">Bitcoin</p>
                                <p className="coin-price-container-avatar-abr">BTC</p>
                            </div>
                            </div>
                            <div className="coin-price-container-details">

                            <h2 className="coin-price-container-details-price">$52,450</h2>
                            </div>
                        </div>

                        <div className="coin-price-container">
                            <div className="coin-price-container-avatar">
                            <img src="https://cdn.decrypt.co/wp-content/uploads/2019/03/ethereum.png" alt="coin-image" className="coin-price-container-avatar-img" />
                            <div className="coin-price-container-avatar-details">
                                <p className="coin-price-container-avatar-name">Etheruem</p>
                                <p className="coin-price-container-avatar-abr">BTC</p>
                            </div>
                            </div>
                            <div className="coin-price-container-details">

                            <h2 className="coin-price-container-details-price">$2,749.98</h2>
                            </div>
                        </div>
                    </div>
                    <div className="market-container">
                        <div className="market-container-title">
                            <h3>Market history</h3>
                            <div className="market-container-title-time">
                            <p>1H</p>
                            <p>1D</p>
                            <p>1W</p>
                            <p>1Y</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Dashboard
