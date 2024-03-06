import { Route, Switch } from "react-router-dom";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import { Product } from "./page/Product";

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/product" component={Product} />
		</Switch>
	);
}

export default App;
