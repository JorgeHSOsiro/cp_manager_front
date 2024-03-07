import { ProductDefaultInterface } from "../interfaces/products";

export const ProductCard = ({
	id,
	name,
	brand,
	model,
	price,
	color,
}: ProductDefaultInterface) => {
	return (
		<div className="block size-48 w-64 text-gray-900 border-2 border-gray-500 rounded-md shadow-md m-2 p-4 hover:border-indigo-600">
			<a href={`/product-detail/${id}`}>
				<p className="text-lg">name: {name}</p>
				<p>brand: {brand}</p>
				<p>model: {model}</p>
				<p>R$ {price}</p>
				<p>color: {color}</p>
			</a>
		</div>
	);
};
