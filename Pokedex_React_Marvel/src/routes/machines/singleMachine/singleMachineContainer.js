import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";

import {getMachine} from '../../../data/machine';
import Machine from './singleMachine';

class singleMachContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            machine: undefined,
            machineURL: undefined
        };
    }

    async componentDidMount() {
        const machine = await getMachine(`machine/${this.props.match.params.id}`);

        this.setState({machine});
    }

    render() {
        if (this.state.machine === undefined) {

            return <div>Loading...</div>;
        }
        return <Machine machine={this.state.machine}/>
    }
}

export default singleMachContainer;
