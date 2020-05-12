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
      Team1Logo={warriorLogo}
      Team2Logo={wildcatLogo}
      />
      <Game venue="Hops & Fire Arena" Team1Name="Sharks" Team2Name="Pioneers"
      Team1Logo={sharksLogo}
      Team2Logo={pioneersLogo}
      />
      <Game venue="The Thunder Dome" Team1Name="Bulldogs" Team2Name="Raptors"
      Team1Logo={bulldogsLogo}
      Team2Logo={raptorsLogo}
      />
      </div>
  );
}

export default App;
