import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import UserProfile from './pages/UserProfile';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/user/:username" element={<UserProfile />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
