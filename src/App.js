import React from'react';
import Game from './components/game/Game';
import './App.css';


function App() {
  return (
    <div>
    <Game venue="Smoothie King Stadium" Team1Name="Warriors" Team2Name="Wildcats" 
      Team1Logo={<img src='../../images/warriorLogo.jpg' alt=""/>}
      Team2Logo={<img src="./wildcatLogo.jpg" alt="" />}
      />
      <Game venue="Hops & Fire Arena" Team1Name="Sharks" Team2Name="Pioneers"
      Team1Logo={<img src="./sharksLogo.jpg" alt=""/>}
      Team2Logo={<img src="./pioneerLogo.gif" alt=""/>}
      />
      <Game venue="The Thunder Dome" Team1Name="Bulldogs" Team2Name="Raptors"
      Team1Logo={<img src="./components/images/Bulldogs" alt=""/>}
      Team2Logo={<img src="./raptorsLogo.jpg" alt=""/>}
      />
      </div>
  );
}

export default App;
