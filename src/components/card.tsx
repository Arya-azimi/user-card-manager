type CardProps = {
	name: string;
	email: string;
	onRemove: () => void;
};

function Card({ name, email, onRemove }: CardProps) {
	return (
		<div className="w-90 bg-slate-800 rounded-md p-4 mx-auto my-2 flex justify-between items-center">
			<div>
				<p className="text-white text-xl">نام: {name}</p>
				<p className="text-white text-xl">ایمیل: {email}</p>
			</div>

			<button
				onClick={onRemove}
				className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
			>
				حذف
			</button>
		</div>
	);
}

export default Card;
