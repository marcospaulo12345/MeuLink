import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home/index';
import Links from './pages/Links/index';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Links' element={<Links />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;