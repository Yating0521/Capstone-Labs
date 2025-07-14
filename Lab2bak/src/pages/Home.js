import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the main page of the application.</p>
            <Link to="/about">Go to About Page</Link>
        </div>
    );
};

export default Home;