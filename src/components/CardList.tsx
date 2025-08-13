import Card from "./card.tsx";
import { CardData } from "../types.ts";

type CardListProps = {
  cards: CardData[];
  onRemoveCard: (id: string) => void;
  onEditCard: (id: string) => void;
};

function CardList({ cards, onRemoveCard, onEditCard }: CardListProps) {
  return (
    <>
      {cards.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          email={card.email}
          phone={card.phone}
          address={card.address}
          onRemove={() => onRemoveCard(card.id)}
          onEdit={() => onEditCard(card.id)}
        />
      ))}
    </>
  );
}

export default CardList;
