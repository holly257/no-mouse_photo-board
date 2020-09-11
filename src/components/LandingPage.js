import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardKey from './KeyboardKey';
import '../styling/LandingPage.css';

function LandingPage() {
    return (
        <main className="inner-main">
            <section id="page-header">
                <h3 className="title-text">Photo Finder</h3>
                <main className="main-body">
                    <div className="hero">
                        <span>
                            <img
                                className="hero-images"
                                src="/images/pixeltrue-idea-1.png"
                                alt="computer idea"
                            ></img>
                            <p className="hero-text">
                                Let your creative juices flow and find new images easily!
                            </p>
                        </span>
                        <span>
                            <p className="hero-text">
                                Find and save images fast and without a mouse!
                            </p>
                            <img
                                className="hero-images"
                                src="/images/pixeltrue-time-management-1.png"
                                alt="girl hourglass"
                            ></img>
                        </span>
                    </div>
                    <KeyboardKey />
                    <Link id='get-started' className="link" to="/search">
                        Lets Get Started!
                    </Link>
                </main>
            </section>
        </main>
    );
}

export default LandingPage;
