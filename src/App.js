import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route> <Login/> </Route>
        </Switch>
      </Router>
      
    </div>

  );
}

export default App;
