import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <main>
            <section>Landing Page</section>
            <section>
                <h1>Check out our app!</h1>
                <Link to="/search">Search</Link>
            </section>
        </main>
    );
}

export default LandingPage;
