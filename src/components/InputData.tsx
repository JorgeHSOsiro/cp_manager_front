import { SetStateAction } from "react";

interface InputProps {
	title: string;
	name: string;
	type: string;
	placeholder: string;
	value: string;
	setFunction: (a: SetStateAction<string>) => void;
}

export const InputData = ({
	title,
	name,
	type,
	placeholder,
	value,
	setFunction,
}: InputProps) => {
	return (
		<div>
			<div className="flex items-center justify-between">
				<label
					htmlFor={name}
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					{title}
				</label>
			</div>
			<div className="mt-2">
				<input
					id={name}
					name={name}
					type={type}
					placeholder={placeholder}
					value={value}
					required
					onChange={(e) => setFunction(e.target.value)}
					className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
	);
};
