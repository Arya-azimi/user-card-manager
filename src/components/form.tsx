import { useState, useEffect } from "react";
import Card from "./card";
import InputForm from "./InputForm.tsx";

type CardData = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
};

function Form() {
  const [cards, setCards] = useState<CardData[]>(() => {
    const savedCards = localStorage.getItem("cards");
    return savedCards ? JSON.parse(savedCards) : [];
  });
  const [editingCard, setEditingCard] = useState<CardData | null>(null);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const handleSaveCard = (cardToSave: CardData) => {
    if (editingCard) {
      setCards((prevCards) =>
        prevCards.map((card) => (card.id === cardToSave.id ? cardToSave : card))
      );
      setEditingCard(null);
    } else {
      const newCard = {
        ...cardToSave,
        id: Date.now().toString(),
      };
      setCards([...cards, newCard]);
    }
  };

  const removeCard = (idToRemove: string) => {
    const newCards = cards.filter((card) => card.id !== idToRemove);
    setCards(newCards);
  };

  const editCard = (idToEdit: string) => {
    const cardToEdit = cards.find((card) => card.id === idToEdit);
    if (cardToEdit) {
      setEditingCard(cardToEdit);
    }
  };

  return (
    <>
      <InputForm
        onSaveCard={handleSaveCard}
        editingCard={editingCard}
        onClearEdit={() => setEditingCard(null)}
      />

      {cards.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          email={card.email}
          phone={card.phone}
          address={card.address}
          onRemove={() => removeCard(card.id)}
          onEdit={() => editCard(card.id)}
        />
      ))}
    </>
  );
}

export default Form;
