import React from 'react';
import '../styling/NotFoundPage.css';

function NotFoundPage() {
    return (
        <main className="inner-main">
            <section id="page-header">
                <div className="error-main">
                    <div id="error-page">
                        <h2>404 Error</h2>
                        <h3>Sorry, page not found.</h3>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default NotFoundPage;
