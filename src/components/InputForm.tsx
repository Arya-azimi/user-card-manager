import React, { useState, useEffect } from "react";
import { generateUniqueId } from "../utils/uniqueId.ts";
import { CardData } from "../types.ts";

type InputFormProps = {
  onSaveCard: (card: CardData) => void;
  editingCard: CardData | null;
  onClearEdit: () => void;
};

function InputForm({ onSaveCard, editingCard, onClearEdit }: InputFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingCard) {
      setFormData({
        name: editingCard.name,
        email: editingCard.email,
        phone: editingCard.phone,
        address: editingCard.address,
      });
    } else {
      setFormData({ name: "", email: "", phone: "", address: "" });
    }
  }, [editingCard]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setError("Name and email are required.");
      return;
    }

    const cardToSave: CardData = editingCard
      ? { ...editingCard, ...formData }
      : { id: generateUniqueId(), ...formData };

    onSaveCard(cardToSave);

    onClearEdit();
    setFormData({ name: "", email: "", phone: "", address: "" });
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 flex flex-col mx-auto my-5 justify-center p-4 rounded-md md:w-2xl"
    >
      <input
        type="text"
        placeholder="Name"
        className="my-3 bg-slate-900 p-3 rounded-md text-white"
        onChange={handleChange}
        value={formData.name}
      />
      <input
        type="text"
        placeholder="Email"
        className="my-3 bg-slate-900 p-3 rounded-md text-white"
        onChange={handleChange}
        value={formData.email}
      />
      <input
        type="text"
        placeholder="Phone"
        className="my-3 bg-slate-900 p-3 rounded-md text-white"
        onChange={handleChange}
        value={formData.phone}
      />
      <input
        type="text"
        placeholder="Address"
        className="my-3 bg-slate-900 p-3 rounded-md text-white"
        onChange={handleChange}
        value={formData.address}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="bg-slate-600 text-gray-200 p-3 text-xl rounded-md my-3"
      >
        {editingCard ? "Update Card" : "Add Card"}
      </button>
      {editingCard && (
        <button
          type="button"
          onClick={onClearEdit}
          className="bg-gray-500 text-white p-3 text-xl rounded-md my-3"
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default InputForm;
