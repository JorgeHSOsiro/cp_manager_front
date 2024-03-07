import { useState } from "react";
import { OkToast } from "../components/OkToast";
import { ErrorToast } from "../components/ErrorToast";
import api from "../service/api";
import { InputData } from "../components/InputData";

export const AddProduct = () => {
	const [name, setName] = useState("");
	const [brand, setBrand] = useState("");
	const [model, setModel] = useState("");
	const [price, setPrice] = useState("");
	const [color, setColor] = useState("");
	const [okMessage, setOkMessage] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);
	const [message, setMessage] = useState("");

	const resetForm = () => {
		setName("");
		setBrand("");
		setModel("");
		setPrice("");
		setColor("");
	};

	const addProduct = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = {
			name,
			brand,
			model,
			price,
			color,
		};
		await api
			.post("/cellphones", { data })
			.then(() => {
				setErrorMessage(false);
				setOkMessage(true);
				resetForm();
				setMessage("Product successfuly created!");
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
				<form onSubmit={(event) => addProduct(event)} className="space-y-6">
					<InputData
						title="Cellphone name"
						name={"name"}
						type={"text"}
						value={name}
						placeholder="Samsung Galaxy S24"
						setFunction={setName}
					/>
					<InputData
						title="Cellphone brand"
						name={"brand"}
						type={"text"}
						value={brand}
						placeholder="Samsung"
						setFunction={setBrand}
					/>
					<InputData
						title="Cellphone model"
						name={"model"}
						type={"text"}
						value={model}
						placeholder="Galaxy S24"
						setFunction={setModel}
					/>
					<InputData
						title="Price"
						name={"price"}
						type={"text"}
						value={price}
						placeholder="1000,00"
						setFunction={setPrice}
					/>
					<InputData
						title="Cellphone Color"
						name={"color"}
						type={"text"}
						value={color}
						placeholder="black"
						setFunction={setColor}
					/>
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
					<a href="/product">Back</a>
				</div>
			</div>
		</div>
	);
};
