import "./Board.css";
import React from "react";
import VerticalSlot from "../VerticalSlot";

function template(boardState) {
  console.log(boardState);

  let slots = boardState.map( (x,i) => <VerticalSlot key={i} holes={boardState[i]}/>);

  return (
    <div className="board"> 
    {slots}     
    </div>
  );
};

export default template;
