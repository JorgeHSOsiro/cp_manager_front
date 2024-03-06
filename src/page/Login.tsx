import { useEffect, useState } from "react";
import { login } from "../service/userApi";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		login(email, password);
	}, []);
	return (
		<div>
			<div className="py-16 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-6" action="#" method="POST">
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
								required
								onChange={(e) => setPassword(e.target.value)}
								className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div>
						<a
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							href="/products"
						>
							Sign in
						</a>
					</div>
				</form>
				<div>
					<a href="/register" className="font-medium hover:text-indigo-500">
						Create account
					</a>
				</div>
			</div>
		</div>
	);
};
