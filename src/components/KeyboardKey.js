import React from 'react';

function KeyboardKey() {
    return (
        <div id="key-main">
            <section id="key-inner">
                <p>Tab - move to next</p>
                <p>Shift+Tab - move back</p>
                <p>Shift+f - search</p>
                <br />
                <p>Tab to a button & hit enter to trigger it's action</p>
                <p>- save a photo</p>
                <p>- delete a saved photo</p>
                <p>- open a photo in a new tab</p>
                <p>- navigate to that page</p>
            </section>
        </div>
    );
}

export default KeyboardKey;
