import React from 'react';
import { mean, median, mode } from '../functions/GlobalFunction.js';
import '../css/Table.css';

let DataSet = require('../data/DataSet.json');

class Flavanoid extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    // calculate and render table
    calculateMeanMeadianMode(distinct_class, DataSet) {
        return (
            <>
                <table id="customers">
                    <tr>
                        <th>Measure</th>
                        <th>Flavanoids Mean</th>
                        <th>Flavanoids Median</th>
                        <th>Flavanoids Mode</th>
                    </tr>
                    {distinct_class.map((item, index) => {
                        let res_DataSet = DataSet.filter(DataSet => DataSet.Alcohol == distinct_class[index]).map(filteredObj => filteredObj.Flavanoids);
                        return < tr >
                            <td>Class {distinct_class[index]}</td>
                            <td>{(mean(res_DataSet))}</td>
                            <td>{(median(res_DataSet))}</td>
                            <td>{(mode(res_DataSet))}</td>
                        </tr>
                    })}
                </table >
            </>
        );
    }

    render() {

        // get alcohol classes
        var distinct_class = [];
        for (let i = 0; i < DataSet.length; i++) {
            if (!distinct_class.includes(DataSet[i].Alcohol)) {
                distinct_class.push(DataSet[i].Alcohol);
            }
        }

        return (
            <div>
                <h1 className="f-heading">Flavanoid</h1>
                {this.calculateMeanMeadianMode(distinct_class, DataSet)}
            </div>
        );
    }
}

export default Flavanoid;