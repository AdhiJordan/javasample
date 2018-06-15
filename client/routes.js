import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
	HashRouter,
	ReactRouter
} from "react-router-dom";

import Header from "./component/HeaderPage/Header.js";
import SignUpPage from "./component/SignUpPage/SignUp.js";
import LoginPage from "./component/LoginPage/LoginPage.js";

const appRoutes = [
	{
		path: "/",
		isExactPath: true,
		component: <SignUpPage />
	},
	{
		path: "/sign-up",
		isExactPath: true,
		component: <SignUpPage />
	},
	{
		path: "/login",
		isExactPath: true,
		component: <LoginPage />
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