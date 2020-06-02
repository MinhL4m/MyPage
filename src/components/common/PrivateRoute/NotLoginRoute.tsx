import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

interface NotLoginRouteProps {
	isAuth: boolean;
	Component: React.FC;
	path: string;
	props: any;
}

function mapStateToProps(state: any) {
	return {
		isAuth: state.authUser.isAuth
	};
}

/**
 * Route is used for route that logined user cannot reach such as login page
 */
const NotLoginRoute: React.FC<NotLoginRouteProps> = ({ isAuth, Component, path }) => {
	return (
		<Route
			path={path}
			render={(props: any) => (!isAuth ? <Component {...props} /> : <Redirect to="/admin" />)}
		/>
	);
};

export default connect(mapStateToProps, null)(NotLoginRoute);
