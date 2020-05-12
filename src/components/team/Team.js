import React from'react';

function Team(props){
  const {numShots,score,percentMade,} =props.data;
  console.log(props)
          return(
            <React.Fragment>
              <h3>{props.name}<br/> <img src={props.logo} alt="logo"></img></h3>
              <button id="shoot" onClick ={props.handleShoot}>Shoot</button>
              <p>Shots <br/>{numShots}</p>
              <p>Shot Percentage<br/>{percentMade}% </p>
              <p>Score: <br />{score} </p>
            </React.Fragment>
          ); 
}
export default Team;