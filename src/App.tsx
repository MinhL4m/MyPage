import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { PorfolioContainer } from "./components/Porfolio/PorfolioContainer";
import Nav from "./components/common/Nav/Nav";
import { Footer } from "./components/common/Footer/Footer";
import { BlogContainer } from "./components/Blog/BlogList/BlogContainer";
import { BlogContainer as AdminBlog } from "./components/Admin/BlogList/BlogContainer";
import { BlogArticleContainer } from "./components/Blog/BlogArticle/BlogArticleContainer";
import Login from "./components/Login/LoginComponent";
import { Admin } from "./components/Admin/Admin/Admin";

import { authRef } from "./firebase/firebase";
import NotLoginRoute from "./components/common/PrivateRoute/NotLoginRoute";
import LoginedRoute from "./components/common/PrivateRoute/LoginedRoute";

import BlogNewContainer from "./components/Admin/BlogEdit/BlogNewContainer";
import BlogEditContainer from "./components/Admin/BlogEdit/BlogEditContainer";
import { TodoContainer } from "./components/Admin/Todo/TodoContainer";
import NotFound from "./components/NotFound/NotFoundComponent";

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchSignIn: () => dispatch({ type: "LOGIN" }),
  };
}

function App(props: any) {
  // React.useEffect(() => {
  // 	authRef.onAuthStateChanged((user) => {
  // 		if (user) {
  // 			props.dispatchSignIn();
  // 		}
  // 		document.querySelector('.App')?.classList.add('render')
  // 	});
  // }, []);

  return (
    <div className="App render">
      <Nav />
      <Switch>
        <Route onUpdate={() => window.scrollTo(0, 0)} exact path="/">
          <Home />
        </Route>
        <Route onUpdate={() => window.scrollTo(0, 0)} exact path="/porfolio">
          <PorfolioContainer />
        </Route>
        <Route onUpdate={() => window.scrollTo(0, 0)} exact path="/blog">
          <BlogContainer />
        </Route>
        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          exact
          path="/blog/:id"
          children={<BlogArticleContainer />}
        ></Route>

        <NotLoginRoute Component={Login} path="/login" />
        <LoginedRoute Component={BlogNewContainer} path="/admin/addblog" />
        <LoginedRoute Component={BlogEditContainer} path="/admin/blog/:id" />
        <LoginedRoute Component={TodoContainer} path="/admin/todo" />
        <LoginedRoute Component={AdminBlog} path="/admin/blog" />
        <LoginedRoute Component={Admin} path="/admin" />
        <Route exact path="/404">
          <NotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </div>
  );
}

export default connect(null, mapDispatchToProps)(App);
