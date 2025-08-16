import React from "react";

type CardProps = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  onRemove: () => void;
};

function Card({ name, email, phone, address, onRemove }: CardProps) {
  return (
    <div className="w-90 bg-slate-800 rounded-md p-4 mx-auto my-2 flex justify-between items-center">
      <div>
        <p className="text-white text-xl">نام: {name}</p>
        <p className="text-white text-xl">ایمیل: {email}</p>
        <p className="text-white text-xl">شماره تماس: {phone}</p>
        <p className="text-white text-xl">آدرس: {address}</p>
      </div>

      <div className="flex flex-col space-y-2">
        <button
          onClick={onRemove}
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
        >
          حذف
        </button>
      </div>
    </div>
  );
}

export { Card };
