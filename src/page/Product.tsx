import { useEffect, useState } from "react";
import api from "../service/api";
import { useHistory } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { ProductInterface, ProductDataInterface } from "../interfaces/products";

export const Product = () => {
	const [products, setProducts] = useState<ProductInterface[]>([]);
	const [productWithdetail, setProductWithDetail] = useState<
		ProductInterface[]
	>([]);

	const history = useHistory();
	useEffect(() => {
		const token = localStorage.getItem("token");

		if (!token) {
			history.push("/");
		} else {
			api.get("/cellphones").then((response) => {
				const productsApi = response.data;
				const productsDetailList = [];
				const productsDefault = [];
				productsApi.forEach((product: ProductDataInterface) => {
					if (Object.keys(product.data).includes("details")) {
						productsDetailList.push(product);
					} else if (Array.isArray(product.data)) {
						return;
					} else {
						productsDefault.push(product);
					}
				});

				setProductWithDetail(productsDetailList);
				setProducts(productsDefault);
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
						name={product.data.name}
						brand={product.data.brand}
						model={product.data.model}
						price={product.data.price}
						color={product.data.color}
					/>
				))}
				{productWithdetail.map((product) => (
					<ProductCard
						name={product.data.name}
						brand={product.data.details.brand}
						model={product.data.details.model}
						price={product.data.price}
						color={product.data.details.color}
					/>
				))}
			</div>
		</div>
	);
};
