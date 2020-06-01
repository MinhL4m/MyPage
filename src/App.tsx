import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { PorfolioContainer } from './components/Porfolio/PorfolioContainer';
import { Nav } from './components/common/Nav/Nav';
import { Footer } from './components/common/Footer/Footer';
import { BlogContainer } from './components/Blog/BlogList/BlogContainer';
import { BlogArticle } from './components/Blog/BlogArticle/BlogArticle';
import Login from './components/Login/LoginComponent';

import { authRef } from './firebase/firebase';

function mapDispatchToProps(dispatch: any) {
	return {
		dispatchSignIn: () => dispatch({ type: 'LOGIN' })
	};
}

function App(props: any) {
	React.useEffect(() => {
		authRef.onAuthStateChanged((user) => {
			if (user) {
				props.dispatchSignIn();
			}
		});
	}, []);

	return (
		<div className="App">
			<Nav />
			<Switch>
				<Route path="/">
					<Login />
				</Route>
			</Switch>

			{/* <Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/porfolio">
					<PorfolioContainer />
				</Route>
				<Route exact path="/blog">
					<BlogContainer />
				</Route>
			</Switch> */}
			<Footer />
		</div>
	);
}

export default connect(null, mapDispatchToProps)(App);
