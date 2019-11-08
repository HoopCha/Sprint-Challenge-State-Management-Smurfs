import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions/index';
import Smurf from './Smurf';
import SmurfForm from "./SmurfForm";

const App = props => {

  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  if (props.isFetching) {
    return <h2>Loading Smurfs...</h2>;
  }

  console.log(props.smurfs)
  return (
    <div>
      <SmurfForm />
      {props.error && <p>{props.error}</p>}
      {props.smurfs.map(smurf => (
          <Smurf key={smurf.id} 
          name={smurf.name} 
          age={smurf.age}
          height={smurf.height}/>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(App);
