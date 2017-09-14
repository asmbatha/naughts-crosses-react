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
            currP: 'X',
            board: ['', '', '', '', '', '', '', '', ''],
        })
    }
    
    handlePlay(i) {
        let board = this.state.board;
        if(board[i] !== '') return
        board[i] = this.state.currP;
        
        let toggleSym = () => this.state.currP === 'X' ? 'O' : 'X'

        let check = ({currP, board}) => {
            return [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]].find(s=> board[s[0]] === toggleSym() && board[s[0]] === board[s[1]] && board[s[0]] === board[s[2]])
        }

        this.setState({
            currP: toggleSym(),
            board: board,
        },()=>{
            setTimeout(() => {
                if(check(this.state)){
                    alert(`Congratulations. '${toggleSym()}' won the game`)
                    this.setState({
                        currP: 'X',
                        board: ['','','','','','','','',''],
                    })
                }else if(!(this.state.board.filter(x=>x==='').length)){
                    alert(`Draw`)
                    this.setState({
                        currP: 'X',
                        board: ['','','','','','','','',''],
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
