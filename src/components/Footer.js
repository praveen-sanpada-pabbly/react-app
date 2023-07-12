import React from 'react';
import '../css/Footer.css';

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    // Footer Logic
    render() {
        return (
            <div>
                <footer>
                    <p>Manufac Analytics Private Limited<br />
                        <a href="info@manufacanalytics.com">info@manufacanalytics.com</a></p>
                </footer>
            </div>
        );
    }
}

export default Footer;