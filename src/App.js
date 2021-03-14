import LoadPage from "./pages/loadPage";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FloorOne from "./floors/floorOne";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LoadPage />
          </Route>
          <Route exact path="/FloorOne">
            <FloorOne />
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
