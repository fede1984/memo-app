import React from "react";
import { render, screen } from "@testing-library/react";
import Scoreboard from "./ScoreBoard";

describe("Scoreboard component", () => {
  const player = "John";
  const score = { hits: 4, errors: 2 };

  test("renders the player's name", () => {
    render(<Scoreboard player={player} score={score} />);
    const playerName = screen.getByText(player);
    expect(playerName).toBeInTheDocument();
  });

  test("renders the number of hits", () => {
    render(<Scoreboard player={player} score={score} />);
    const hits = screen.getByText(`${score.hits}`);
    expect(hits).toBeInTheDocument();
  });

  test("renders the number of errors", () => {
    render(<Scoreboard player={player} score={score} />);
    const errors = screen.getByText(`${score.errors}`);
    expect(errors).toBeInTheDocument();
  });
});