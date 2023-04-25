import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should render login page at first', () => {
    const { getByTestId } = render(<App />);
    const inputElement = getByTestId('app-ingresa');;
    expect(inputElement).toBeInTheDocument();
  });

  it('should start the game when the user inputs a name and clicks the start button', () => {
    const { getByTestId } = render(<App />);
    const inputElement = getByTestId('app-ingresa');;
    const startButtonElement = screen.getByRole('button', { name: /empezar juego/i });
    fireEvent.change(inputElement, { target: { value: 'John Doe' } });
    fireEvent.click(startButtonElement);
    const gameBoardElement = screen.getByRole('heading', { name: 'Memo App' });
    expect(gameBoardElement).toBeInTheDocument();
  });
});
