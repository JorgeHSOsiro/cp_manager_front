import { ProductDefaultInterface } from "../interfaces/products";
import { TrashIcon } from "@heroicons/react/16/solid";
import api from "../service/api";

export const ProductCard = ({
	id,
	name,
	brand,
	model,
	price,
	color,
}: ProductDefaultInterface) => {
	const deleteProduct = async () => {
		await api.delete(`/cellphones/${id}`);
		window.location.reload();
	};
	return (
		<div className="block size-48 w-64 text-gray-900 border-2 border-gray-500 rounded-md shadow-md m-2 p-4 hover:border-indigo-600">
			<a href={`/product-detail/${id}`}>
				<p className="text-lg">name: {name}</p>
				<p>brand: {brand}</p>
				<p>model: {model}</p>
				<p>R$ {price}</p>
				<p>color: {color}</p>
			</a>
			<TrashIcon
				className="h-6 w-6 mt-4 text-red-500 hover:text-red-800"
				onClick={() => deleteProduct()}
			/>
		</div>
	);
};
