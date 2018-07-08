import "./Hole.css";
import React from "react";

function template() {

  let classValue = '';

  switch (this.props.value) {
    case null:
      classValue = "empty-hole";  
      break;

    default:
      classValue = this.props.value+"-hole";  
      break;
  }  

  return (
    <div className = {'hole '+ classValue}>
     
    </div>
  );
};

export default template;
