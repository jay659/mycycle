import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Layout/Navbar";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Home from "./components/HomePage/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import BookDetails from "./components/BookDetails/BookDetails";
import DetailView from "./components/HomePage/DetailView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} className="done" />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/bookdetails" component={BookDetails} />
          <Route exact path="/detailview" component={DetailView} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
