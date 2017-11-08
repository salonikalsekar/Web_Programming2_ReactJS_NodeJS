import React, {Component} from 'react';
import {getBerryList} from '../../data/berry';
import Berry_List from './berryList';
import {Pagination} from 'react-bootstrap';

class BerryListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            berryList: undefined,
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
        const pageData = await getBerryList('berry/');
        let urlPageNumber = this.props.match.params.id;
        this.setState({
            noOfPages: Math.ceil(pageData.count / 20),
            sizePerPage: pageData.berryList.length,
            berryList: pageData.berryList,
            activePage: Number(urlPageNumber)
        });
        if (urlPageNumber > 0) {
            this.handleSelect(this.state.activePage);
        }
    }

    async handleSelect(page) {
        const pageData = await getBerryList(`berry/?offset=${ (this.state.offset) * (page - 1)}`)
        this.setState({berryList: pageData.berryList, activePage: page})
    }

    componentWillReceiveProps(nextProps) {}

    render() {
        if (this.state.berryList === undefined) {
            return <div>Loading...</div>;}
        return (
            <div>
                <Berry_List
                    activePage={this.state.activePage}
                    berrys={this.state.berryList}/>
                <Pagination
                    className="users-pagination"
                    bsSize="medium"
                    maxButtons={5}
                    next
                    prev
                    items={this.state.noOfPages}
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect}/>
            </div>
        )
    }
}

export default BerryListContainer;
