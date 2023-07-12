import React from 'react';

class NoPage extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    // No Page Logic for 404
    render() {
        return (
            <div>
                <h1 className='home-text'>404, Page Not Found!</h1>
            </div>
        );
    }
}

export default NoPage;