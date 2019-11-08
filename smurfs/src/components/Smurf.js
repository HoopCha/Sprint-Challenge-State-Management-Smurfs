import React from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions/index";

const Smurf = props => {

console.log(props.id)

return (
  <div>
  <h2>{props.name}</h2>
  <p>{props.age}</p>
  <p>{props.height}</p>
  <button onClick={() =>  props.deleteSmurf(props.id)} >Delete</button>
  </div> )
};

export default connect (null, { deleteSmurf })(Smurf);