import React,{Component} from'react';
import Team from '../team/Team';
 




class Game extends Component{
  constructor(props){
      super(props);
      this.state={
        venue: props.venue,
        count:0,
        Team1:{
          name:props.Team1Name,
          logo:props.Team1Logo,
          numShots:0,
          score: 0,
          percentMade: null,
          },
        Team2:{
          name:props.Team2Name,
          logo:props.Team2Logo,
          numShots: 0,
          score: 0,
          percentMade: null,
          }
          
      }
      this.swish = new Audio('././assets/Swish.wav')
      this.cheering = new Audio('././assets/cheering.wav')
    };
resetCounter=(team)=>{
  this.setState((state,props) =>{
      return{
        ...state,
        count: state.count + 1,
        Team1:{
                ...state.Team1,
                  numShots:0,
                  score:0,
                  percentMade:null,
         },
         Team2:{
                ...state.Team2,
                  numShots:0,
                  score:0,
                  percentMade:null,
         }
      }
    })
}


    shotsTaken = (team) =>{
          this.setState((state,props) =>{
            console.log(this.state)
            return{
              ...state,
              [team]:{
                ...state[team],
                numShots: state[team].numShots + 1
              }
            };
          });
          this.cheering.play()
        }
        
    scoreABucket = (team) =>{
      
          this.setState((state,props) =>{
            return{
              ...state,
              [team]:{
                ...state[team],
              score: state[team].score + 2
              }
            };
          });
        }
        
        ShotPercentage=(team)=>{
          this.setState((state,props) =>{
            return{
              ...state,
              [team]:{
                ...state[team],
                percentMade: Math.round(( (state[team].score/2) / state[team].numShots) * 100)
              }
            };
          });
        }
        
        handleShoot =(team)=>{
          this.shotsTaken(team)
          if(Math.random() <=.4){
            this.scoreABucket(team)
            setTimeout(()=>{this.swish.play()},3700)
          }
          this.ShotPercentage(team)
        }
        
    render(){
      const {count}= this.state;
    return( 
        <React.Fragment>
         <h2>Welcome to {this.props.venue}</h2>
         <div className="scoreBanner">
            <div className="Home"> 
            Home <br /> {this.state.Team1.score}
            </div>
            <div className="Away"> Away <br /> {this.state.Team2.score}</div>
        </div>
         <div className="scoreBoard">
          <p className="Team1"> 
            <Team data={this.state.Team1} 
            name={this.props.Team1Name} 
            logo={this.props.Team1Logo} 
            handleShoot={()=>this.handleShoot("Team1")}/>
            </p>
          <p className="Team2"> 
            <Team data={this.state.Team2} 
            name={this.props.Team2Name}
            logo={this.props.Team2Logo}
            handleShoot={()=>this.handleShoot("Team2")}/>
            </p>   
           <p> <button id="reset" onClick={this.resetCounter}>Resets Game</button>
            <br/>{count}
            </p>
          </div>
        </React.Fragment>
      );
    }
}
export default Game;