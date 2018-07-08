import React    from "react";
import template from "./Board.jsx";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {boardState : state.boardState};
}

class ConnectedBoard extends React.Component {

  render() {
    return template.call(this, this.props.boardState);
  }
}

const Board = connect(mapStateToProps)(ConnectedBoard);

export default Board;
