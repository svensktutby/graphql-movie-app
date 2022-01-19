import React, { FC } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../routes/Home';
import Details from '../routes/Details';

const App: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Details />} />
            </Routes>
        </Router>
    );
};

export default App;
