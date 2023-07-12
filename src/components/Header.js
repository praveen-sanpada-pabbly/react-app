import React from 'react';
import '../css/Header.css';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    // Header Logic
    render() {
        return (
            <div>
                <ul>
                    <li><a class="active" href="/">Home</a></li>
                    <li><a href="/flavanoid">Flavanoid</a></li>
                    <li><a href="/gamma">Gamma</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;