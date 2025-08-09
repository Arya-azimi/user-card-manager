// Form.tsx
import { useState, useEffect } from "react";
import Card from "./card";

type CardData = {
  id: string;
  name: string;
  email: string;
};

function Form() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const [cards, setCards] = useState<CardData[]>(() => {
    const savedCards = localStorage.getItem("cards");
    return savedCards ? JSON.parse(savedCards) : [];
  });

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const NameUpdater = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  const EmailUpdater = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputName && inputEmail) {
      const newCard = {
        id: Date.now().toString(),
        name: inputName,
        email: inputEmail,
      };
      setCards([...cards, newCard]);
      setInputName("");
      setInputEmail("");
    }
  };

  // تابع جدید برای حذف یک کارت با استفاده از id
  const removeCard = (idToRemove: string) => {
    const newCards = cards.filter((card) => card.id !== idToRemove);
    setCards(newCards);
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="bg-slate-800 flex flex-col mx-auto my-5 justify-center p-4 rounded-md md:w-2xl"
      >
        <input
          type="text"
          placeholder="نام"
          className="my-3 bg-slate-900 p-3 rounded-md text-white"
          onChange={NameUpdater}
          value={inputName}
        />
        <input
          type="email"
          placeholder="ایمیل"
          className="my-3 bg-slate-900 p-3 rounded-md text-white"
          onChange={EmailUpdater}
          value={inputEmail}
        />
        <button
          type="submit"
          className="bg-slate-600 text-gray-200 p-3 text-xl rounded-md my-3"
        >
          تایید
        </button>
      </form>

      {cards.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          email={card.email}
          onRemove={() => removeCard(card.id)}
        />
      ))}
    </>
  );
}

export default Form;
