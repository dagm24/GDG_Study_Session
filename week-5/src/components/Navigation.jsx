import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <Link to="/">Home</Link> | 
            <Link to="/about">About</Link> | 
            <Link to="/contact">Contact</Link> | 
            <Link to="/user/johndoe">Profile</Link>
            <button onClick={() => navigate('/')}>Go to Home</button>
        </nav>
    );
};

export default Navigation;
