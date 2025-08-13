type CardProps = {
  name: string;
  email: string;
  phone: string;
  address: string;
  onRemove: () => void;
  onEdit: () => void;
};

function Card({ name, email, phone, address, onRemove, onEdit }: CardProps) {
  return (
    <div className="w-150 bg-slate-800 text-white rounded-md p-4 mx-auto my-2 flex justify-between items-center">
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Address: {address}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onEdit}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={onRemove}
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Card;
