import "./Board.css";
import React from "react";
import VerticalSlot from "../VerticalSlot";
import { CONST_VAR_OBJ } from "../../constants/project-constants";

function template() {

  let slots = this.boardState.map( (x,i) => <VerticalSlot key={i} holes={this.boardState[i]} handleClick={() => this.handleClick(i)}/>);

  let player = getPlayerText(this.playerTurn);

  return (
    <div className="board"> 
      {slots}     
      <h2>Turn for {player} </h2>
    </div>
  );
};

function getPlayerText(playerTurn){
  return  playerTurn === CONST_VAR_OBJ.PLAYER1 ? <p style={{color:'red'}}>Player 1</p> : <p style={{color:'#2CC5FF'}}>Player 2</p>;
}

export default template;
