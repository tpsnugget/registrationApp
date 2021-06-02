import './App.css';
import { Route, Switch } from "react-router-dom"
import AdminReport from './pages/AdminReport'
import Registration from './pages/Registration'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Registration />
        </Route>
        <Route exact path='/AdminReport'>
          <AdminReport />
        </Route>
        <Route exact path='/Registration'>
          <Registration />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
