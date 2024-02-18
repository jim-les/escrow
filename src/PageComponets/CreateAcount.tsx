import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./style.css";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LinkIcon from '@mui/icons-material/Link';

const CreateAcount: React.FC = () => {
    const [step, setStep] = useState(1);
    const [popup, setPopup] = useState(false);
    const [popuStepOne, setPopuStepOne] = useState(true);
    const navigate = useNavigate();

    const handleNextStep = (step: number) => () => {
        setStep(step);
    }

    const handleTogglePopup = (popup: boolean) => () => {
        setPopup(popup);
    }

    useEffect(() => {
        let redirectTimeout: NodeJS.Timeout | null = null;
        if (!popuStepOne) {
            redirectTimeout = setTimeout(() => {
                navigate('/dashboard'); // Redirect to dashboard after 10 seconds
            }, 10000);
        }
        return () => {
            if (redirectTimeout) {
                clearTimeout(redirectTimeout); // Clear timeout on component unmount or when popuStepOne changes
            }
        };
    }, [popuStepOne, history]);

    return (
        <div className='signup-page'>
            <div className="signup_container">
                {step === 1 && (
                    <div className='create_identity'>
                        <h1>Securely Connect to DAPP on <br /> <br /> the Internet Computer</h1>
                        <button className='create_btn' onClick={handleNextStep(2)}>Create Internet Identity</button>
                        <button>Use existing</button>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h2>Create Passkey</h2>
                        <p>Select Create Passkey and complete the prompt that pops up on your device</p>
                        <div>
                            <button className="create_passkey_btn" onClick={handleTogglePopup(true)}>Create Passkey</button>
                            <button className='cancel_btn' onClick={handleNextStep(1)}>Cancel</button>
                        </div>

                        {popup && (
                            <div className="select_device">
                                {popuStepOne ? (
                                    <>
                                        <div className="d-flex" style={{ width: "100%", justifyContent: "center" }}>
                                            <LinkIcon style={{ fontSize: "200px" }} />
                                        </div>
                                        <p><b>Create a passkey</b></p>
                                        <p>Choose how you want to create the passkey for the identity</p>
                                        <div className="device_list">
                                            <hr />
                                            <li onClick={() => setPopuStepOne(false)}>
                                                <PhoneAndroidIcon />
                                                SM_AF4
                                            </li>

                                            <hr />
                                            <li>Use a different phone or tablet</li>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="d-flex" style={{ width: "100%", justifyContent: "center" }}>
                                            <PhoneAndroidIcon style={{ fontSize: "200px" }} />
                                        </div>
                                        <p><b>Check your device <br /> A notification was sent SM_AF$</b></p>
                                        <Link to="/">Didn't get it?</Link>
                                    </>
                                )}

                                <div className='d-flex'>
                                    <button style={{ width: "150px", fontSize: "14px" }}>Manage devices</button>
                                    <button style={{ width: "150px", fontSize: "14px", padding: "5px 10px" }} onClick={handleTogglePopup(false)}>Cancel</button>
                                </div>
                            </div>
                        )}

                    </div>

                )}

            </div>
        </div>
    )
}

export default CreateAcount;
