import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import GameBoard from './GameBoard';


const mockOnScoreUpdate = jest.fn();
const mockOnGameOver = jest.fn();

test('renders GameBoard component', async () => {
  render(<GameBoard onScoreUpdate={mockOnScoreUpdate} onGameOver={mockOnGameOver}/>);
  const gameBoard = screen.getByTestId('game-board');
  expect(gameBoard).toBeInTheDocument();
});

test('shuffles and renders cards', async () => {
  render(<GameBoard onScoreUpdate={mockOnScoreUpdate} onGameOver={mockOnGameOver} />);
  waitFor(()=> { const cards = screen.getAllByTestId(/^card-.*$/);
  expect(cards.length).toBeGreaterThan(0);
  expect(cards[0]).not.toEqual(screen.getByTestId('card-0'));
})
});


test('triggers game over on all matches completed', async () => {
  render(<GameBoard onScoreUpdate={mockOnScoreUpdate} onGameOver={mockOnGameOver} />);
  waitFor(()=> { const cards = screen.getAllByTestId(/^card-.*$/);
  cards.forEach((card) => {
    fireEvent.click(card);
  });
  expect(mockOnGameOver).toHaveBeenCalled();
})

});
