import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Box extends Component {
    
    handleClick(id) {
        this.props.onHandleClick(id)
    }
    
    render() {
        return (
        <div className="box" onClick={this.handleClick.bind(this, this.props.box.id)}>
            {this.props.box.value}
        </div>
        );
    }
}

export default Box;
