import Home from './Home'
import Create from './Create'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/Create">
              <Create />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
