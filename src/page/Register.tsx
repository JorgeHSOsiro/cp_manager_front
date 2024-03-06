import { useState } from "react";
import { register } from "../service/userApi";
import { OkToast } from "../components/OkToast";
import { ErrorToast } from "../components/ErrorToast";

export const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [okMessage, setOkMessage] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);
	const [message, setMessage] = useState("");

	const resetForm = () => {
		setName("");
		setEmail("");
		setPassword("");
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		await register(name, email, password)
			.then(() => {
				setErrorMessage(false);
				setOkMessage(true);
				resetForm();
				setMessage("Successfuly registered!");
			})
			.catch((error) => {
				setOkMessage(false);
				setErrorMessage(true);
				setMessage(error.response.data.error.message);
			});
	};

	return (
		<div>
			<div className="py-16 sm:mx-auto sm:w-full sm:max-w-sm">
				<form onSubmit={(event) => handleSubmit(event)} className="space-y-6">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Your Name
						</label>
						<div className="mt-2">
							<input
								id="name"
								name="name"
								type="text"
								placeholder="John Doe"
								required
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Email address
						</label>
						<div className="mt-2">
							<input
								id="email"
								name="email"
								type="email"
								placeholder="example@example.com"
								value={email}
								required
								onChange={(e) => setEmail(e.target.value)}
								className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Password
							</label>
						</div>
						<div className="mt-2">
							<input
								id="password"
								name="password"
								type="password"
								value={password}
								required
								onChange={(e) => setPassword(e.target.value)}
								className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Register
						</button>
					</div>
					{errorMessage && (
						<ErrorToast message={message} errorFunction={setErrorMessage} />
					)}{" "}
					{okMessage && <OkToast message={message} okFunction={setOkMessage} />}
				</form>
				<div className="mt-4">
					<a href="/">Back</a>
				</div>
			</div>
		</div>
	);
};
