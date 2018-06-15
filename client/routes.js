import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
	HashRouter,
	ReactRouter
} from "react-router-dom";

import SignUp from "./component/SignUpPage/SignUp.js";

const appRoutes = [
	{
		path: "/",
		isExactPath: true,
		component: <SignUp />
	}
];
console.log("Came to routs...");
const routes = (
	<HashRouter>
		<Switch>
			{appRoutes.map((routeItem, idx) => {
				return <Route
					key={routeItem.path}
					path={routeItem.path}
					exact={routeItem.isExactPath}
					render={(params) => {
						return routeItem.component;
					}}
				/>;
			})}
		</Switch>
	</HashRouter>
);

export default routes;