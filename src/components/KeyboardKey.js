import React from 'react';

function KeyboardKey() {
    return (
        <main className="main-body" id='key-main'>
            <section id="key-hints">
                <p>Helpful Keys:</p>
                <ul>
                    <li>Tab - move to next</li>
                    <li>Shift+Tab - move back</li>
                    <li>Shift+f - search</li>
                    <li>Shift+s - save a photo</li>
                    <li>Shift+t - open a photo in a new tab</li>
                    <li>Enter on a nav link - navigate to that page</li>
                </ul>
            </section>
        </main>
    );
}

export default KeyboardKey;
