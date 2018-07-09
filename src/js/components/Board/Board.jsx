import "./Board.css";
import React from "react";
import VerticalSlot from "../VerticalSlot";
import { CONST_VAR_OBJ } from "../../constants/project-constants";

function template() {

  let slots = this.boardState.map( (x,i) => <VerticalSlot key={i} holes={this.boardState[i]} handleClick={() => this.handleClick(i)}/>);

  let player = getPlayerText(this.playerTurn);

  let winner_status = getWinnerText(this.winner);
  let bottomText = getBottomText(this.winner, this.playerTurn);

  return (
    <div className="board"> 
      {slots}     
      <h2>{bottomText}</h2>
    </div>
  );
};

function getBottomText(winner, playerTurn){

  let bottomText = '';

  if(winner === ''){
    return  playerTurn === CONST_VAR_OBJ.PLAYER1 ? <p style={{color:'red'}}>Turn for Player 1</p> : <p style={{color:'#2CC5FF'}}>Turn for Player 2</p>;
  }
  else{
    return winner === CONST_VAR_OBJ.PLAYER1 ? <p style={{color:'red'}}>Player-1 Wins !!!</p> : winner === CONST_VAR_OBJ.PLAYER2 ? <p style={{color:'#2CC5FF'}}>Player-2 Wins !!!</p> : '';
  }

}

function getPlayerText(playerTurn){
  return  playerTurn === CONST_VAR_OBJ.PLAYER1 ? <p style={{color:'red'}}>Player 1</p> : <p style={{color:'#2CC5FF'}}>Player 2</p>;
}

function getWinnerText(winner){
  return winner === CONST_VAR_OBJ.PLAYER1 ? <p style={{color:'red'}}>Player-1 Wins !!!</p> : winner === CONST_VAR_OBJ.PLAYER2 ? <p style={{color:'#2CC5FF'}}>Player-2 Wins !!!</p> : '';
}

export default template;
