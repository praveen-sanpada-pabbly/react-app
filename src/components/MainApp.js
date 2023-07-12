import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Flavanoid from './Flavanoid';
import Gamma from './Gamma';
import NoPage from './NoPage';

class MainApp extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    // Main App logic
    render() {
        return (
            <div>
                <Header />
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="flavanoid" element={<Flavanoid />} />
                        <Route path="gamma" element={<Gamma />} />
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}

export default MainApp;