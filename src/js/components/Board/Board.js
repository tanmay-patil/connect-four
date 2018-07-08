import React    from "react";
import template from "./Board.jsx";
import { connect } from "react-redux";
import { updateBoard } from "../../actions";

const mapStateToProps = state => {
  return {
    boardState : state.boardState,
    winner : state.winner,
    playerTurn : state.playerTurn
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updateBoard: newBoardState => {
      dispatch(updateBoard(newBoardState))
    }
  };
};

class ConnectedBoard extends React.Component {

  handleClick(verticalSlotID){

    // If no winner yet, let the game continue
    if(this.props.winner === ''){
      // Let the user make a move
      this.makeMove(verticalSlotID);
    }

  }

  makeMove(verticalSlotID){

    // Make a clone of board state array using spread operator style
    const boardClone = [...[], ...this.props.boardState];

    // Check if there is any vacant spot in this particular slot
    if(boardClone[verticalSlotID].indexOf(null) != -1){

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

  render() {
    
    this.boardState = this.props.boardState;

    return template.call(this);
  }
}

const Board = connect(mapStateToProps, mapDispatchToProps)(ConnectedBoard);

export default Board;
