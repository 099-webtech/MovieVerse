// Header.js
import React from 'react';
import './header.css'; 
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
            <Link to="/">
    <img className="header__icon" src="/images/Colorful Retro Illustrative Tasty Popcorn Logo.png" alt="MovieVerse Logo" />
</Link>             </div>
            <nav className="nav">
                <ul>
                    <li><a href="/movies/popular">Popular</a></li>
                    <li><a href="/movies/top_rated">Top Rated</a></li>
                    <li><a href="/movies/upcoming">Upcoming</a></li>
                </ul>
            </nav>
            
        </header>
    );
};

export default Header;