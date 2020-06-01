import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';

interface LoginedRouteProps {
	isAuth: boolean;
	Component: React.FC;
	path: string;
}

function mapStateToProps(state: any) {
	return {
		isAuth: state.authUser.isAuth
	};
}

/**
 * Route is used for route that only logined user can reach such as admin page
 */
const LoginedRoute: React.FC<LoginedRouteProps> = ({ isAuth, Component, path }) => {
	return (
		<Route
			path={path}
			render={(props: any) => (isAuth ? <Component {...props} /> : <Redirect to="/login" />)}
		/>
	);
};

export default connect(mapStateToProps, null)(LoginedRoute);
