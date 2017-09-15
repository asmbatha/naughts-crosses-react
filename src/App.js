import React, { Component } from 'react';
import Board from './Components/Board';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentWillMount() {
        this.setState({
            moves: 0,
            board: [{value:''}, {value:''}, {value:''}, {value:''}, {value:''}, {value:''}, {value:''}, {value:''}, {value:''}],
        })
    }
    
    handlePlay(i) {
        let board = this.state.board;
        if(board[i].value !== '') return;
        
        let getSym = () => this.state.moves % 2 === 0 ? 'O' : 'X'

        let check = ({board}) => {
            return [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]].find(s=> board[s[0]].value === getSym() && board[s[0]].value === board[s[1]].value && board[s[0]].value === board[s[2]].value)
        }
        
        this.state.moves++;
        board[i] = getSym();
        this.setState({
            board: board,
        },()=>{
            setTimeout(() => {
                if(check(this.state)){
                    alert(`Congratulations. '${getSym()}' won the game`)
                    this.setState({
                        moves: 0,
                        board: [{value:''}, {value:''}, {value:''}, {value:''}, {value:''}, {value:''}, {value:''}, {value:''}, {value:''}],
                    })
                }else if(this.state.moves === 9){
                    alert(`Draw`)
                    this.setState({
                        moves: 0,
                        board: [{value:''}, {value:''}, {value:''}, {value:''}, {value:''}, {value:''}, {value:''}, {value:''}, {value:''}],
                    })
                }
            },0);
        })
    }

    render() {
        return (
            <Board play={this.handlePlay.bind(this)} boxes={this.state.board}/>
        );
    }
}

export default App;
