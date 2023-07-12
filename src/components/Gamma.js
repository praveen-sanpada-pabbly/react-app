import React from 'react';
import { mean, median, mode } from '../functions/GlobalFunction.js';
import '../css/Table.css';

let DataSet = require('../data/DataSet.json');

class Gamma extends React.Component {
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
                        <th>Gamma Mean</th>
                        <th>Gamma Median</th>
                        <th>Gamma Mode</th>
                    </tr>
                    {distinct_class.map((item, index) => {
                        let res_DataSet = DataSet.filter(DataSet => DataSet.Alcohol == distinct_class[index]).map(filteredObj => (((filteredObj.Ash) * (filteredObj.Hue)) / filteredObj.Magnesium));
                        return < tr >
                            <td>Class {distinct_class[index]}</td>
                            <td>{(mean(res_DataSet))}</td>
                            <td>{(median(res_DataSet))}</td>
                            <td>{'Value - ' + (mode(res_DataSet)).max + ', Count - ' + (mode(res_DataSet)).count}</td>
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
                <h1 className="f-heading">Gamma</h1>
                {this.calculateMeanMeadianMode(distinct_class, DataSet)}
            </div>
        );
    }
}

export default Gamma;