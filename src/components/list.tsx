import type { CardData } from "../types";
import Card from "./card";

interface ListProps {
	cards: CardData[];
	onCardRemove: (id: string) => void;
}

function List({ cards, onCardRemove }: ListProps) {
	return cards.map(({ id, name, email }) => (
		<Card
			key={id}
			name={name}
			email={email}
			onRemove={() => onCardRemove(id)}
		/>
	));
}

export { List };
