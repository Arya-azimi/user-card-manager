import { AddressInput, EmailInput, PhoneInput, TextInput } from "./input";
import { generateRandomId } from "../utils";
import type { CardData } from "../types";
import { useInput } from "../hooks";

interface FormProps {
  onCardAdd: (card: CardData) => void;
}

function Form({ onCardAdd }: FormProps) {
  const [name, setName, onNameChange] = useInput();
  const [email, setEmail, onEmailChange] = useInput();
  const [phone, setPhone, onPhoneChange] = useInput();
  const [address, setAddress, onAddressChange] = useInput();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name && email && phone && address) {
      const newCard = {
        id: generateRandomId(),
        name,
        email,
        phone,
        address,
      };

      onCardAdd(newCard);

      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-slate-800 flex flex-col mx-auto my-5 justify-center p-4 rounded-md md:w-2xl"
    >
      <TextInput placeholder="نام" value={name} onChange={onNameChange} />
      <EmailInput placeholder="ایمیل" value={email} onChange={onEmailChange} />
      <PhoneInput
        placeholder="شماره تماس"
        value={phone}
        onChange={onPhoneChange}
      />
      <AddressInput
        placeholder="آدرس"
        value={address}
        onChange={onAddressChange}
      />

      <button
        type="submit"
        className="bg-slate-600 text-gray-200 p-3 text-xl rounded-md my-3"
      >
        تایید
      </button>
    </form>
  );
}

export { Form };
