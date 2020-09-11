import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Nav.css';

function Nav() {
    return (
        <section id="nav-bar">
            <nav>
                <Link className="nav-link" to="/">
                    Home
                </Link>

                <div id="nav-right">
                    <Link className="nav-link" to="/search">
                        Search
                    </Link>
                    <Link className="nav-link" to="/saved">
                        Saved
                    </Link>
                </div>
            </nav>
        </section>
    );
}

export default Nav;
