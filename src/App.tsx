import { Route, Routes } from "react-router-dom";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import { Product } from "./page/Product";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/product" element={<Product />} />
		</Routes>
	);
}

export default App;
