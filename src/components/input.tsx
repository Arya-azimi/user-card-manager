import type { ComponentProps } from "react";

function Input({
	className = "my-3 bg-slate-900 p-3 rounded-md text-white",
	...props
}: ComponentProps<"input">) {
	return <input className={className} {...props} />;
}

function TextInput(props: ComponentProps<"input">) {
	return <Input type="text" {...props} />;
}

function EmailInput(props: ComponentProps<"input">) {
	return <Input type="email" {...props} />;
}

export { Input, TextInput, EmailInput };
