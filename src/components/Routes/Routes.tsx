import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import { locations } from "../../modules/routing/locations";
import { Home } from "../Home";
// import { Burn } from "../Burn";
import { Transfer } from "../Transfer";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={locations.root()} component={Home} />
        {/* <Route exact path={locations.burn()} component={Burn} /> */}
        <Route exact path={locations.transfer()} component={Transfer} />
        <Redirect to={locations.root()} />
      </Switch>
    </Router>
  );
};

export default Routes;
