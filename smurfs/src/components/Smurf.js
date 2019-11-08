import React from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions/index";
import styled from 'styled-components'

const Card = styled.div`
  overflow: hidden;
  width: 200px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
  margin: 15px;
  padding: 10px;
  transition: 0.3s;
  background: #62CDFD;
  color: white;
  text-align: center;
  :hover {
    box-shadow: 0 0px 40px rgba(0, 0, 0, .2);
    border: 2px solid DIMGREY;
    background: LIGHTSLATEGREY;
  }
`
const Image = styled.img`
max-width:100%;
height:auto;
`

const Details = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`

function getRandomInt() {
  var randNumber = Math.floor(Math.random() * (1 - 4)) + 4; 
  var url = "";
  console.log(randNumber)
  if (randNumber === 1) {
    return url = 'https://i.pinimg.com/originals/df/0d/9f/df0d9ff2a9f4166bb4e02e2ff0513bf6.jpg'
  } else if (randNumber === 2) {
    return url = 'https://vignette.wikia.nocookie.net/smurfs/images/c/cd/Blossom.png/revision/latest?cb=20170207145521'
  } else if (randNumber === 3) {
    return url = 'https://vignette.wikia.nocookie.net/smurfs/images/b/bd/Papa_Smurf123.png/revision/latest?cb=20130805130238'
  } else if (randNumber === 4) {
    return url = 'https://previews.123rf.com/images/chutimakuanamon/chutimakuanamon1704/chutimakuanamon170400476/76979609-smurf-comics-cartoon-illustration.jpg'
  }
}

getRandomInt()


const Smurf = props => {

console.log(props.id)

return (
  <Card>
  <h2>{props.name}</h2>
  <p>{props.age}</p>
  <p>{props.height}</p>
  <Image src={getRandomInt()} alt={props.name} />
  <button onClick={() =>  props.deleteSmurf(props.id)} >Delete</button>
  </Card> )
};

export default connect (null, { deleteSmurf })(Smurf);