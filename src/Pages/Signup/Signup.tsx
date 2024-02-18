import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./style.css";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LinkIcon from '@mui/icons-material/Link';

const Signup: React.FC = () =>{
    const [step, setStep] = useState(1);
    const [popup, setPopup] = useState(false);
    const [popuStepOne, setPopuStepOne] = useState(true);
    const handleNextStep = (step: number) => () => {
        setStep(step);
    }
    const handeTogglePopu = (popup: boolean) => () => {
        setPopup(popup);
    }
    
    return (
        <div className='signup-page'>
            <div className="signup_container">
                {step == 1 && (
                    <div className='create_identity'>
                        <h1>Securely Connect to DAPP on <br /> <br /> the Internet Computer</h1>
                        <button className='create_btn' onClick={handleNextStep(2)}>Create Internet Identity</button>
                        <button>Use existing</button>
                    </div>
                )}

                {step == 2 && (
                    <div>
                        <h2>Create Passkey</h2>
                        <p>Select Create Passkey and complete and complete the prompt that pop-up on you device</p>
                        <div>
                            <button className="create_passkey_btn" onClick={handeTogglePopu(true)}>Create Passkey</button>
                            <button className='cancel_btn' onClick={handleNextStep(1)}>Cancel</button>
                        </div>

                        {popup && (
                            <div className="select_device">
                                {popuStepOne ? (
                                    <>
                                        <div className="d-flex" style={{width: "100%", justifyContent: "center"}}>
                                            <LinkIcon style={{fontSize: "200px"}}/>
                                        </div>
                                        <p><b>Create a passkey</b></p>
                                        <p>Chooce how you want to create the passkey for the identity</p>
                                        <div className="device_list">
                                            <hr />  
                                            <li onClick={() => setPopuStepOne(false)}>
                                                <PhoneAndroidIcon />
                                                SM_AF4
                                            </li>

                                            <hr />
                                            <li>User a different phone, or tablet</li>
                                        </div>
                                    </>
                                ): (
                                    <>
                                        <div className="d-flex" style={{width: "100%", justifyContent: "center"}}>
                                            <PhoneAndroidIcon style={{fontSize: "200px"}}/>
                                        </div>
                                        <p><b>Check you device <br /> A notification was sent SM_AF$</b></p>
                                        <Link to="/">Didn't get it?</Link>
                                    </>
                                )}

                                <div className='d-flex'>
                                    <button style={{width: "150px", fontSize: "14px"}}>Manage devices</button>
                                    <button style={{width: "150px" , fontSize: "14px", padding: "5px 10px"}} onClick={handeTogglePopu(false)}>Cancel</button>
                                </div>
                            </div>
                        )}

                    </div>

                )}

                
            </div>
        </div>
    )
}

export default Signup
