import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from './Card';

const handleClickMock = jest.fn();

const testProps = {
  id: 'test-id',
  image: 'test-image-url',
  flipped: false,
  matched: false,
  handleClick: handleClickMock,
};

describe('Card component', () => {
  it('should render without errors', () => {
    const { getByTestId } = render(<Card {...testProps} />);
    expect(getByTestId('card')).toBeInTheDocument();
  });

  it('should call handleClick function when clicked', () => {
    const { getByTestId } = render(<Card {...testProps} />);
    const cardElement = getByTestId('card');
    fireEvent.click(cardElement);
    expect(handleClickMock).toHaveBeenCalledWith('test-id');
  });

  it('should add "Card--flipped" class if "flipped" prop is true', () => {
    const { getByTestId } = render(<Card {...testProps} flipped={true} />);
    const cardElement = getByTestId('card');
    expect(cardElement).toHaveClass('Card--flipped');
  });

  it('should add "Card--matched" class if "matched" prop is true', () => {
    const { getByTestId } = render(<Card {...testProps} matched={true} />);
    const cardElement = getByTestId('card');
    expect(cardElement).toHaveClass('Card--matched');
  });

  it('should show front image when "flipped" prop is false', () => {
    const { getByTestId } = render(<Card {...testProps} />);
    const cardFrontElement = getByTestId('card-image');
    expect(cardFrontElement).toHaveAttribute('src', 'test-image-url');
  });

  it('should show back image when "flipped" prop is true', () => {
    const { getByTestId } = render(<Card {...testProps} flipped={true} />);
    const cardFrontElement = getByTestId('card-back');
    expect(cardFrontElement).toBeInTheDocument();
  });
});