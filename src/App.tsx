import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { backend } from './declarations/backend';

// Icons used
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExploreIcon from '@mui/icons-material/Explore';
import LockIcon from '@mui/icons-material/Lock';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { TextField, InputAdornment } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';


// image imports 
import defaultProfilePic from "./assets/man.png";
import bitcoinIcon from "./assets/bitcoin.png";
import internetComputerIcon from "./assets/internet-computer.png";
import escrowIcon from "./assets/mortgage-cheque.png";

// impost pages
import Overview from './Pages/Overview/Overview';
// import Trade from './Pages/Trade/Trade';
import Signup from './Pages/Signup/Signup';
import Dashboard from './Pages/Dashboard/dashboard';

// pages
import { DashBoard } from './PageComponets/AuthRequired/Dashboard';
import { Home } from './PageComponets/Home';
import { AboutUs } from './PageComponets/About';
import { Contact } from './PageComponets/Contact';
import { Privancy } from './PageComponets/Privancy';
import { TermaConditions } from './PageComponets/Terms&Condtions';
import { FAQs } from './PageComponets/Faqs';
import { Trade } from './PageComponets/AuthRequired/Trade';
import CreateAcount from './PageComponets/CreateAcount';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-account" element={<CreateAcount />} />
                    <Route path="/Dashboard" element={<DashBoard />} />
                    <Route path="/peertonode" element={<Trade />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/privancy" element={<Privancy />} />
                    <Route path="/terms-conditions" element={<TermaConditions />} />
                    <Route path="/faqs" element={<FAQs />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
