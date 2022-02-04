import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home/index';
import Links from './pages/Links/index';
import Error from './pages/Error/index';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Links' element={<Links />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;