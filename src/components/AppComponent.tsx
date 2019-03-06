import * as React from 'react';
import './appComponent.style';
import {
  Route,
  Switch,
  Router,
} from 'react-router';
import { Link } from 'react-router-dom';
import User from 'src/components/testComponent';
import history from 'src/configuration/history';

const HomePage: React.SFC = (props: any) => {
  return (
    <div>
      HomePage
      </div>
  );
};

const List: React.SFC = (props: any) => {
  return (
    <div>
      List
    </div>
  );
};

class App extends React.Component<any, any> {
  public render() {
    return (
      <Router
        history={history}
      >
        <div>

          <div className="App">
            <header className="App-header">
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/list">List</Link>
            </p>
            <p>
              <Link to="/user">User</Link>
            </p>
          </div>
          <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route exact={true} path="/user" component={User} />
            <Route exact={true} path="/list" component={List} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;