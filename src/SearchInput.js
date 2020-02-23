import React, { Component } from 'react';
import './SearchInput.css';

class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event) {
        this.props.filterData(event.target.value);
        event.preventDefault();
    }
    render() {
        return (
            <div className='searchInput'>
                <input
                    className='searchInput__input'
                    type='text'
                    placeholder='Search...'
                    onChange={this.onInputChange}
                />
            </div>
        );
    }
};

export default SearchInput;
