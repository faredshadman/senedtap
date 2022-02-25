import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllDocs from "./pages/AllDocs/AllDocs";
import FAQ from "./pages/FAQ/FAQ";
import Home from "./pages/Home/Home";
import Favs from "./pages/Favs/Favs";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/all-docs" component={AllDocs} />
          <Route path="/faq" component={FAQ} />
          <Route path="/favs" component={Favs} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="*">Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
