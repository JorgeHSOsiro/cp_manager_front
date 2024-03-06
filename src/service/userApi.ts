import { api } from "./api";

export const login = async (email: string, password: string) => {
	await api
		.post("/login", {
			email,
			password,
		})
		.catch((error) => error);
};

export const register = async (
	name: string,
	email: string,
	password: string
) => {
	await api.post("/user", {
		name,
		email,
		password,
	});
};
