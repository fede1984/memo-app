import React from "react";
import "./ScoreBoard.module.scss";
import { GameScore } from "../../types";

interface Props {
  score: GameScore;
  player: string;
}

const Scoreboard: React.FC<Props> = ({ score,player}) => {
  return (
    <div className="scoreboard">
       <div className="scoreboard__item">
        <div className="scoreboard__title">Jugador</div>
        <div className="scoreboard__value scoreboard__value--player">{player}</div>
      </div>
      <div className="scoreboard__item">
        <div className="scoreboard__title">Errores</div>
        <div className="scoreboard__value scoreboard__value--errors" data-testid="errores">{score.errors}</div>
      </div>
      <div className="scoreboard__item">
        <div className="scoreboard__title">Aciertos</div>
        <div className="scoreboard__value scoreboard__value--hits" >{score.hits}</div>
      </div>
    </div>
  );
};

export default Scoreboard;
