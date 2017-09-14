import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Box from './Box';

class Board extends Component {
    updateBox(id){
        this.props.play(id)
    }

    render() {
        let boxes;
        
        if(this.props.boxes){
            boxes = this.props.boxes.map( (x,i) => {
                let box = {id:i, value:x}
                return (
                    <Box onHandleClick={this.updateBox.bind(this)} ref-id={i} key={i} box={box} />
                )
            })
        }

        return (
            <div className="board">
                {boxes}
            </div>
        );
    }

}

export default Board;
