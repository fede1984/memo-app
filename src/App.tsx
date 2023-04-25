import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import "./App.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [player, setPlayer] = useState("");
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState({ hits: 0, errors: 0 });
  const [appPage, setAppPage] = useState('__login-page')
  
  
  const handleStartGame = (newPlayer: string) => {
    setPlayer(newPlayer);
    setIsGameStarted(true);
    setAppPage('__game-page')
  };

  const handleRestartGame = () => {
    setAppPage('__game-page')
    setScore({ hits: 0, errors: 0 });
    setIsGameOver(false);
  };


  const handleScoreUpdate = (isHit: boolean) => {
    setScore((prevState) => {
      return {
        ...prevState,
        hits: isHit ? prevState.hits + 1 : prevState.hits,
        errors: isHit ? prevState.errors : prevState.errors + 1,
      };
    });
  };

  const handleGameOver = () => {
    setAppPage('__result-page')
    setIsGameOver(true);
  };

  return (
    <div className={`app${appPage}`}>
         {!isGameStarted && ( 
        <div className="app__presentation">
        <div className="app__intro">
             <h1>Memo App</h1>
             <p >Ingresa tu nombre y empeza a jugar!!</p>
        </div> 
        <div className="app__start-form">
          <form onSubmit={(event) => event.preventDefault()}>
            <div className="form-group">
              <input
                data-testid="app-ingresa"
                type="text"
                id="name"
                className="form-control"
                required
                onBlur={(event) =>{
                  const name = event.target.value
                  setPlayer(name)
                }
                }
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!player}
              onClick={() => handleStartGame(player!)}
            >
              Empezar Juego
            </button>
          </form>
        </div>
        </div>
      )}
      {isGameStarted && (
        !isGameOver ?
        <div className="app__game">
          <ScoreBoard score={score} player={player}/>
          <GameBoard 
            onScoreUpdate={handleScoreUpdate}
            onGameOver={handleGameOver}
          />
        </div>
         :<>
         <div className="app__finished">
         <div className="app__finished__result">RESULTADO FINAL</div>
         <div className="app__finished__score">
          <div className="app__finished__hits">ACIERTOS <br/>{score.hits}</div> 
          <div className="app__finished__errors">ERRORES<br/>{score.errors}</div> 
          </div>
         </div>         
         <button className="btn btn-primary" onClick={() => handleRestartGame()}> Jugar de nuevo</button>
         </>
      )}
    </div>
  );
}

export default App;
