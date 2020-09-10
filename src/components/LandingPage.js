import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <main className="inner-main">
            <section id="page-header">
                <h3 className="title-text">Landing Page</h3>
                <main className="main-body">
                    <h1>Check out our app!</h1>
                    <Link to="/search">Search</Link>
                </main>
            </section>
        </main>
    );
}

export default LandingPage;
