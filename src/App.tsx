import { Route, Switch } from "react-router-dom";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import { Product } from "./page/Product";
import { AddProduct } from "./page/AddProduct";
import { UpdateProduct } from "./page/UpdateProduct";

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/product" component={Product} />
			<Route exact path="/add-product" component={AddProduct} />;
			<Route exact path="/product-detail/:id" component={UpdateProduct} />;
		</Switch>
	);
}

export default App;
