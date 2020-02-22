import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Favorites_view from "./views/Favorites_view";
import People_view from "./views/People_view";
import Vehicles_view from "./views/Vehicles_view";
import Planets_view from "./views/Planets_view";
import Detail_view from "./views/Detail_view";
import Home_view from "./views/Home_view";
import injectContext from "./store/appContext";

//create your first component
export const Layout = () => {
	return (
    <>
      <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home_view} />
            <Route path="/People_view" component={People_view} />
            <Route path="/Vehicles_view" component={Vehicles_view} />
            <Route path="/Planets_view" component={Planets_view} />
            <Route path="/Favorites" component={Favorites_view} />
            <Route path="/Details/:type/:id" component={Detail_view} />
            <Route render={() => <h1>Not found!</h1>} />
          </Switch>
          <Footer />
      </BrowserRouter>
    </>
	);
};

export default injectContext(Layout);
