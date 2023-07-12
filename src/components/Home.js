import React from 'react';
import '../css/Home.css';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    // Home App
    render() {
        return (
            <div>
                <h1 className='home-text'>Data Visualization</h1>
                <div className='main-div'>
                    <h4>Task Descriptions :- </h4>
                    <p>You are expected to calculate some statistical measures of the Wine Data Set.</p>
                    <p>In the final product, upon running yarn start, the browser should open with the desired
                        page rendered.</p>
                    <p>No other helper pbraries pke Bootstrap, jQuery, Lodash, etc. should be used.</p>
                    <p>Remove all the unused code (JS, CSS, Test Files, etc) and libraries from the CRA template
                        to reduce clutter.</p>
                </div>
            </div >
        );
    }
}

export default Home;