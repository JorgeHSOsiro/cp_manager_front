export interface ProductInterface {
	id: number;
	data:
		| ProductDefaultInterface
		| ProductTypeDetailInterface
		| ProductTypeArrayInterface;
	createdAt: string;
	updatedAt: string;
}

export interface ProductDefaultInterface {
	id: number;
	name: string;
	brand: string;
	model: string;
	price: number;
	color: string;
}

export interface ProductTypeDetailInterface {
	name: string;
	details: {
		brand: string;
		model: string;
		color: string;
	};
	price: number;
}
export interface ProductDataPriceColor {
	price: number;
	color: string;
}

export interface ProductTypeArrayInterface {
	name: string;
	brand: string;
	model: string;
	data: ProductDataPriceColor[];
}
