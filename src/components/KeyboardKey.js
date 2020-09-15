import React from 'react';

function KeyboardKey() {
    return (
        <div id="key-main">
            <section id="key-inner">
                <p>Tab - move to next</p>
                <p>Shift+Tab - move back</p>
                <p>Shift+f - search</p>
                <p>Shift+s - save a photo</p>
                <p>Shift+d - delete a saved photo</p>
                <p>Shift+v - open a photo in a new tab</p>
                <p>Enter on a nav link - navigate to that page</p>
            </section>
        </div>
    );
}

export default KeyboardKey;
