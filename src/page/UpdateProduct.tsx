import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../service/api";
import { InputData } from "../components/InputData";
import { ErrorToast } from "../components/ErrorToast";
import { OkToast } from "../components/OkToast";

interface ParamInterface {
	id: string;
}

export const UpdateProduct = () => {
	const [name, setName] = useState("");
	const [brand, setBrand] = useState("");
	const [model, setModel] = useState("");
	const [price, setPrice] = useState("");
	const [color, setColor] = useState("");
	const [okMessage, setOkMessage] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);
	const [message, setMessage] = useState("");
	const { id } = useParams<ParamInterface>();

	useEffect(() => {
		api.get(`/cellphones/${id}`).then((response) => {
			if (Object.keys(response.data.data).includes("details")) {
				setName(response.data.data.name);
				setBrand(response.data.data.details.brand);
				setModel(response.data.data.details.model);
				setPrice(response.data.data.price);
				setColor(response.data.data.details.color);
			} else {
				setName(response.data.data.name);
				setBrand(response.data.data.brand);
				setModel(response.data.data.model);
				setPrice(response.data.data.price);
				setColor(response.data.data.color);
			}
		});
	}, []);

	const updateProduct = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = {
			name,
			brand,
			model,
			price,
			color,
		};
		await api
			.put(`/cellphones/${id}`, { data })
			.then(() => {
				setErrorMessage(false);
				setOkMessage(true);
				setMessage("Product successfuly updated!");
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
				<form onSubmit={(event) => updateProduct(event)} className="space-y-6">
					<InputData
						title="Cellphone name"
						name={"name"}
						type={"text"}
						value={name}
						placeholder={name}
						setFunction={setName}
					/>
					<InputData
						title="Cellphone brand"
						name={"brand"}
						type={"text"}
						value={brand}
						placeholder={brand}
						setFunction={setBrand}
					/>
					<InputData
						title="Cellphone model"
						name={"model"}
						type={"text"}
						value={model}
						placeholder={model}
						setFunction={setModel}
					/>
					<InputData
						title="Price"
						name={"price"}
						type={"text"}
						value={price}
						placeholder={price}
						setFunction={setPrice}
					/>
					<InputData
						title="Cellphone Color"
						name={"color"}
						type={"text"}
						value={color}
						placeholder={color}
						setFunction={setColor}
					/>
					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Update
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
