import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './pages/Home';
import GetInTouch from './pages/GetInTouch';


function AppRouter() {
    return (
        <Router>
            <div className='bg-[#0e0c27]'>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/contact" element={<GetInTouch />} />
                </Routes>
            </div>
        </Router>
    );
}

export default AppRouter;
