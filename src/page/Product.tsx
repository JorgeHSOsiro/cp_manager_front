import { useEffect, useState } from "react";
import api from "../service/api";
import { useHistory } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { ProductInterface } from "../interfaces/products";

export const Product = () => {
	const [products, setProducts] = useState<
		ProductInterface[] | ProductInterface[]
	>([]);
	const [query, setQuery] = useState<string>("");

	const history = useHistory();
	useEffect(() => {
		const token = localStorage.getItem("token");

		if (!token) {
			history.push("/");
		} else {
			api.get("/cellphones").then((response) => {
				const productsApi = response.data;
				setProducts(productsApi);
			});
		}
	}, []);

	return (
		<div className="block ml-8 py-10">
			<div className="m-4 flex right-8">
				<a
					href="/add-product"
					type="button"
					className="flex w-20 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Add
				</a>
			</div>
			<div className="flex m-2 gap-2 ">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.data.name}
						brand={
							Object.keys(product.data).includes("details")
								? product.data.details.brand
								: product.data.brand
						}
						model={
							Object.keys(product.data).includes("details")
								? product.data.details.model
								: product.data.model
						}
						price={product.data.price}
						color={
							Object.keys(product.data).includes("details")
								? product.data.details.color
								: product.data.color
						}
					/>
				))}
			</div>
		</div>
	);
};
