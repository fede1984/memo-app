import { useState, useEffect } from 'react';
import { shuffle } from 'lodash';
import Card from '../Card/Card';
import { GameBoardProps } from '../../types';
import { fetchAnimals } from '../../services/api';
import { AnimalCard } from '../../types';
import './GameBoard.module.scss';

const GameBoard = ({
  onScoreUpdate,
  onGameOver,
}: GameBoardProps): JSX.Element => {
  const [cards, setCards] = useState<AnimalCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<AnimalCard[]>([]);
  const [matchedCards, setMatchedCards] = useState<AnimalCard[]>([]);

  const handleCardClick = (card: AnimalCard) => {
    if (selectedCards === undefined || (selectedCards.length === 1 && selectedCards[0].id === card.id)) {
      return;
    }
    if (selectedCards.length === 2 || matchedCards.includes(card)) {
      return;
    }
    setSelectedCards([...selectedCards, card]);

    if (selectedCards.length === 1 && selectedCards[0].imageUrl === card.imageUrl) {
      setMatchedCards([...matchedCards, selectedCards[0], card]);
      setSelectedCards([]);
      onScoreUpdate(true);
    }
  };

  useEffect(() => {
    const fetchCards = async () => {
      const data = await fetchAnimals();
      const fetchedCards: AnimalCard[] = data.map((animal: any, key) => {
        return {
          id: key.toString(),
          imageUrl: animal.image?.url,
          isMatched: false,
          isFlipped: false,
        };
      });
      const fetchedPairCards: AnimalCard[] = data.map((animal: any, key) => {
        return {
          id: key.toString() + "b",
          imageUrl: animal.image?.url,
          isMatched: false,
          isFlipped: false,
        };
      });
      setCards(shuffle([...fetchedCards, ...fetchedPairCards]));
    };

    fetchCards();
  }, []);

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstCard, secondCard] = selectedCards;
      if (firstCard.imageUrl === secondCard.imageUrl) {
        setMatchedCards([...matchedCards, firstCard, secondCard]);
      } else {
        setTimeout(() => {
          setSelectedCards([]);
          onScoreUpdate(false);
        }, 1000);
      }
    }
  }, [selectedCards]);

  useEffect(() => {
    if (matchedCards.length === cards.length && cards.length > 0) {
      onGameOver();
    }
  }, [matchedCards]);

  return (
    <div className="game-board__container container-fluid" data-testid="game-board">
      <div className="game-board__wrapper">
        <div className="game-board__content">
          <div className="game-board__board">
            {cards.map((card) => (
              <div key={card.id} className="game-board__card-wrapper">
                <Card
                  id={card.id}
                  image={card.imageUrl}
                  flipped={!selectedCards.includes(card) && !matchedCards.includes(card)}
                  matched={matchedCards.includes(card)}
                  handleClick={() =>{
                    handleCardClick(card)
                  } }
                  data-testid={`card-${card.id}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;

