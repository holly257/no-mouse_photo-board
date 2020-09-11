import React, { Component } from 'react';
import HotKeys from 'react-hot-keys';
import '../styling/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '../../node_modules/@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '../../node_modules/@fortawesome/free-brands-svg-icons';

class Nav extends Component {
    openGithub(keyName, e, handle) {
        window.open(e.target.href, '_blank');
    }

    openLinkedIn(keyName, e, handle) {
        window.open(e.target.href, '_blank');
    }

    sendEmail(keyName, e, handle) {
        window.open(e.target.href, '_blank');
    }

    render() {
        return (
            <div id="footer-container">
                <div className="contact-item" id="contact-created-by">
                    <img id="footer-pic" src="/images/IMG_1973.jpg"></img>
                    <section>
                        <p className="footer-text">Created By:</p>
                        <p className="footer-text">Holly Rogers</p>
                    </section>
                </div>
                <div className="contact-item" id='footer-key'>
                    <p>Shift+m - open email</p>
                    <p>Shift+g - open Github</p>
                    <p>Shift+l - open LinkedIn</p>
                </div>

                <span id="connect-icons">
                    <li className="contact-info contact-item">
                        <HotKeys keyName="shift+m" onKeyDown={this.sendEmail.bind(this)}>
                            <a
                                href="mailto:hollymrogers12@gmail.com"
                                target="_blank"
                                download
                                rel="noopener noreferrer"
                                className="contact-item"
                            >
                                <FontAwesomeIcon className="contact-item" icon={faEnvelope} />
                            </a>
                        </HotKeys>
                    </li>
                    <li className="contact-item">
                        <HotKeys keyName="shift+g" onKeyDown={this.openGithub.bind(this)}>
                            <a
                                href="https://github.com/holly257/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-item"
                            >
                                <img
                                    className="contact-logos contact-item"
                                    alt="github link"
                                    id="test"
                                    src="/images/GitHub-Mark-Light-32px.png"
                                ></img>
                            </a>
                        </HotKeys>
                    </li>
                    <li className="contact-item">
                        <HotKeys keyName="shift+l" onKeyDown={this.openLinkedIn.bind(this)}>
                            <a
                                href="https://www.linkedin.com/in/holly-rogers-1194a0178/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-item"
                            >
                                <FontAwesomeIcon className="contact-item" icon={faLinkedin} />
                            </a>
                        </HotKeys>
                    </li>
                </span>
            </div>
        );
    }
}

export default Nav;
