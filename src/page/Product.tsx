import { useEffect, useState } from "react";
import api from "../service/api";
import { useHistory } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { ProductInterface } from "../interfaces/products";

export const Product = () => {
	const [products, setProducts] = useState<
		ProductInterface[] | ProductInterface[]
	>([]);
	const [searchResult, setSearchResult] = useState<
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

	const handleSearch = (query: string) => {
		setQuery(query);
		const filteredProducts = products.filter((product) =>
			product.data.name.toLowerCase().includes(query.toLowerCase())
		);
		setSearchResult(filteredProducts);
	};

	const renderProductCards = (products: any) => {
		return products.map((product: any) => (
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
		));
	};

	return (
		<div className="block mx-8 py-10">
			<div className="m-4 flex justify-between mb-10">
				<input
					type="text"
					placeholder="Search..."
					value={query}
					onChange={(e) => handleSearch(e.target.value)}
					className="w-96  rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>

				<a
					href="/add-product"
					type="button"
					className="flex w-40  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Add New Product
				</a>
			</div>
			<div className="flex m-2 gap-2 ">
				{searchResult.length === 0
					? renderProductCards(products)
					: renderProductCards(searchResult)}
			</div>
		</div>
	);
};
