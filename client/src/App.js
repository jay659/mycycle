// import { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./components/layout/Home";
import DetailsView from "./components/pages/DetailView";
import Navbar2 from "./components/layout/Navbar2";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Navbar2 />

        <Switch>
          <Route exact path="/signup" component={Signup} className="done" />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/about_us" component={About-Us} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/detail_view" component={DetailsView} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
