import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";

import {getBerry} from '../../../data/berry';
import BerrySingle from './singleBerry';

class singleBerry_Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            berry: undefined,
            berryURL: undefined
        };
    }

    async componentDidMount() {
        const berry = await getBerry(`berry/${this.props.match.params.id}`);

        this.setState({berry});
    }

    render() {
        if (this.state.berry === undefined) {

            return <div>Loading...</div>;
        }
        return <BerrySingle berry={this.state.berry}/>
    }
}

export default singleBerry_Container;
