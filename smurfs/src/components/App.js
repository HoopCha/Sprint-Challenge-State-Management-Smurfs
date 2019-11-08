import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions/index';
import Smurf from './Smurf';
import SmurfForm from "./SmurfForm";
import styled from 'styled-components'


const Cards = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const App = props => {

  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  if (props.isFetching) {
    return <h2>Loading Smurfs...</h2>;
  }

  const updateSmurfs = () => {
    props.fetchSmurfs();
  }

  return (
    <div>
      <h1> Add a Smurf</h1>
      <SmurfForm />
      <h1> Smurf Village <button onClick={updateSmurfs}>Update Village</button></h1>
      <p> Current Population: {props.smurfs.length}</p>
      {props.error && <p>{props.error}</p>}
      <Cards>
      {props.smurfs.map(smurf => (
        <Smurf key={smurf.id} 
        id={smurf.id} 
          name={smurf.name} 
          age={smurf.age}
          height={smurf.height}/>
      ))}
      </Cards>
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
