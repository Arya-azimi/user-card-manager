import type { CardData } from "../types";
import { Card } from "./card";

interface ListProps {
  cards: CardData[];
  onCardRemove: (id: string) => void;
}

function List({ cards, onCardRemove }: ListProps) {
  return cards.map(({ id, name, email, phone, address }) => (
    <Card
      key={id}
      name={name}
      email={email}
      phone={phone}
      address={address}
      onRemove={() => onCardRemove(id)}
    />
  ));
}

export { List };
