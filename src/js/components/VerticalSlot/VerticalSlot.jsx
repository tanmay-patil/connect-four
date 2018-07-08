import "./VerticalSlot.css";
import React from "react";
import Hole from "../Hole";

function template() {

  let holes = this.props.holes;

  let hole = holes.map((x, i) => (
    <Hole key={i} value={holes[i]}></Hole>
  ));
  
  return (
    <div className="vertical-slot">
      {hole}
    </div>
  );
};

export default template;
