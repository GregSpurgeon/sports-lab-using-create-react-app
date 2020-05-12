import React from'react';
import Game from './components/game/Game';
import './App.css';
import warriorLogo from './components/images/warriorLogo.jpg'
import wildcatLogo from './components/images/wildcatLogo.jpg'
import raptorsLogo from './components/images/raptorsLogo.jpg'
import pioneersLogo from './components/images/pioneersLogo.jpg'
import bulldogsLogo from './components/images/bulldogsLogo.png'
import sharksLogo from './components/images/sharksLogo.jpg'






function App() {
  return (
    <div>
    <Game venue="Smoothie King Stadium" Team1Name="Warriors" Team2Name="Wildcats" 
      Team1Logo={<img src={warriorLogo} alt="no image"/>}
      Team2Logo={<img src={wildcatLogo} alt="" />}
      />
      <Game venue="Hops & Fire Arena" Team1Name="Sharks" Team2Name="Pioneers"
      Team1Logo={<img src={sharksLogo} alt=""/>}
      Team2Logo={<img src={pioneersLogo} alt=""/>}
      />
      <Game venue="The Thunder Dome" Team1Name="Bulldogs" Team2Name="Raptors"
      Team1Logo={<img src={bulldogsLogo} alt=""/>}
      Team2Logo={<img src={raptorsLogo} alt=""/>}
      />
      </div>
  );
}

export default App;
