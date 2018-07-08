import "./Board.css";
import React from "react";
import VerticalSlot from "../VerticalSlot";

function template() {
  console.log(this.boardState);

  let slots = this.boardState.map( (x,i) => <VerticalSlot key={i} holes={this.boardState[i]} handleClick={() => this.handleClick(i)}/>);

  return (
    <div className="board"> 
    {slots}     
    </div>
  );
};

export default template;
