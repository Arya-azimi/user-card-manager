import { useState, useEffect } from "react";
import type { CardData } from "../types";
import { List, Form } from "../components";

const LOCAL_STORAGE_KEY = "cards";

function Home() {
  const [cards, setCards] = useState<CardData[]>(() => {
    const savedCards = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedCards ? JSON.parse(savedCards) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cards));
  }, [cards]);

  const handleCardAdd = (card: CardData) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  const handleCardRemove = (id: string) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  return (
    <div>
      <Form onCardAdd={handleCardAdd} />
      <List cards={cards} onCardRemove={handleCardRemove} />
    </div>
  );
}

export { Home };
