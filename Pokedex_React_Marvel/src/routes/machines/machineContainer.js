import React, {Component} from 'react';
import {getMachineList} from '../../data/machine';
import MachineList from './machineList';
import {Pagination} from 'react-bootstrap';

class MachineContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            machineList: undefined,
            sizePerPage: 0,
            activePage: 1,
            noOfPages: 0,
            offset: 20
        };
        this.handleSelect = this
            .handleSelect
            .bind(this);
    }

    async componentDidMount() {
        const pageData = await getMachineList('machine/');
        let urlPageNumber = this.props.match.params.id;
        this.setState({
            noOfPages: Math.ceil(pageData.count / 20),
            sizePerPage: pageData.machineList.length,
            machineList: pageData.machineList,
            activePage: Number(urlPageNumber)
        });
        if (urlPageNumber > 0) {
            this.handleSelect(this.state.activePage);
        }
    }

    async handleSelect(page) {
        const pageData = await getMachineList(`machine/?offset=${ (this.state.offset) * (page - 1)}`)
        this.setState({machineList: pageData.machineList, activePage: page})
    }

    componentWillReceiveProps(nextProps) {}

    render() {
        if (this.state.machineList === undefined) 
            return <div>Loading...</div>;
        return (
            <div>
                <MachineList
                    activePage={this.state.activePage}
                    machines={this.state.machineList}/>
                <Pagination
                    className="users-pagination"
                    bsSize="medium"
                    maxButtons={5}
                    first
                    last
                    next
                    prev
                    boundaryLinks
                    items={this.state.noOfPages}
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect}/>
            </div>
        )
    }
}

export default MachineContainer;
