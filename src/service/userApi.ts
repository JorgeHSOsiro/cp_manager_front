import { api } from "./api";

export const login = async (email: string, password: string) => {
	await api
		.post("/login", {
			email,
			password,
		})
		.then((res) => localStorage.setItem("token", res.data.token));
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
