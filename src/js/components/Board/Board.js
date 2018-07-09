import React from "react";
import template from "./Board.jsx";
import { connect } from "react-redux";
import { updateBoard } from "../../actions";
import { updateWinner } from "../../actions";

const mapStateToProps = state => {
  return {
    boardState: state.boardState,
    winner: state.winner,
    playerTurn: state.playerTurn
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updateBoard: newBoardState => {
      dispatch(updateBoard(newBoardState))
    },
    updateWinner: newWinnerState => {
      dispatch(updateWinner(newWinnerState))
    }
  };
};

class ConnectedBoard extends React.Component {

  handleClick(verticalSlotID) {

    // If no winner yet, let the game continue
    if (this.props.winner === '') {
      // Let the user make a move
      this.makeMove(verticalSlotID);
    }

  }

  makeMove(verticalSlotID) {

    // Make a clone of board state array using spread operator style
    const boardClone = [...[], ...this.props.boardState];

    // Check if there is any vacant spot in this particular slot
    if (boardClone[verticalSlotID].indexOf(null) !== -1) {

      boardClone[verticalSlotID].reverse();

      // Get the index of the empty hole
      let emptyHoleIndex = boardClone[verticalSlotID].indexOf(null);

      // Insert the color coin in that vacant spot
      boardClone[verticalSlotID][emptyHoleIndex] = this.props.playerTurn;

      boardClone[verticalSlotID].reverse();

      // Update the store state
      // Dispatch action for updating state to store
      this.props.updateBoard(boardClone);

    }

  }

  checkLine(a, b, c, d) {
    // Check first cell non-zero and all cells match
    return ((a !== null) && (a === b) && (a === c) && (a === d));
  }

  checkWinner(bd) {
    
    // console.log(bd);

    // Check Upward Line
    for(let col1=0; col1<=6; col1++){
      for (let row1=5; row1>=3; row1--){
        let status = this.checkLine(bd[col1][row1], bd[col1][row1-1], bd[col1][row1-2], bd[col1][row1-3]);

        if(status){
          console.log(`Upwards Winner is : ${bd[col1][row1]}`);
          return bd[col1][row1];
        }
      }
    }

    // Check Right-wards Line
    for(let col2=0; col2<=3; col2++){
      for(let row2=5; row2>=0; row2--){
        let status = this.checkLine(bd[col2][row2], bd[col2+1][row2], bd[col2+2][row2], bd[col2+3][row2]);

        if(status){
          console.log(`Right Winner is : ${bd[col2][row2]}`);
          return bd[col2][row2];
        }

      }
    }

    // Check Diagonally-Up-Right-wards Line
    for(let col3=0; col3<=3; col3++){
      for(let row3=5; row3>=3; row3--){
        let status = this.checkLine(bd[col3][row3], bd[col3+1][row3-1], bd[col3+2][row3-2], bd[col3+3][row3-3]);

        if(status){
          console.log(`Right Diagonal Winner is : ${bd[col3][row3]}`);
          return bd[col3][row3];
        }

      }
    }

    // Check Diagonally-Up-Left-wards Line
    for(let col4=6; col4>=3; col4--){
      for(let row4=5; row4>=3; row4--){
        let status = this.checkLine(bd[col4][row4], bd[col4-1][row4-1], bd[col4-2][row4-2], bd[col4-3][row4-3]);

        if(status){
          console.log(`Left Diagonal Winner is : ${bd[col4][row4]}`);
          return bd[col4][row4];
        }

      }
    }

    return false;

  }

  componentDidUpdate() {
    let status = this.checkWinner(this.props.boardState);
    
    if(status !== false){
      // Update the store state
      // Dispatch action for updating Winner state to store
      this.props.updateWinner(status);
    }
  }

  render() {

    this.boardState = this.props.boardState;
    this.playerTurn = this.props.playerTurn;
    this.winner = this.props.winner;

    return template.call(this);
  }
}

const Board = connect(mapStateToProps, mapDispatchToProps)(ConnectedBoard);

export default Board;
