export interface AnimalCard {
    id: string;
    imageUrl: string;
    isFlipped: boolean;
    isMatched: boolean;
  }

export interface GameScore {
    hits:number;
    errors: number;
}

export interface GameBoardProps {
  onScoreUpdate: (isHit: boolean) => void;
  onGameOver: () => void;
}
  