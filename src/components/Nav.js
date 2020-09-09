import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Nav.css';

function Nav() {
    return (
        <section id="nav-bar">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
            </nav>
        </section>
    );
}

export default Nav;
