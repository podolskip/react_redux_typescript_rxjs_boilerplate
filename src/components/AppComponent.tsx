import * as React from 'react';
import {
  Route,
  Switch,
  Router,
} from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import User from 'src/components/testComponent';
import history from 'src/configuration/history';
// HELPERS
import {
  pipe,
  createLinksConfiguration,
  createArrayOfJSXLinks,
} from './appComponent.helpers';
// MATERIAL UI
import Toolbar from '@material-ui/core/Toolbar';
// import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// STYLES
import { appComponentStyle as st } from './appComponent.style';
import './appComponent.style';

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
            <header className={st.appHeader}>
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <Toolbar className={st.toolbarMain}>
                <Typography
                  component="h2"
                  variant="h5"
                  color="inherit"
                  align="center"
                  noWrap={true}
                  className={st.toolbarTitle}
                >
                  React-Redux Boilerplate
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  className={st.headerBtn}
                >
                  Sign In
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  className={st.headerBtn}
                >
                  Sign Up
                </Button>
              </Toolbar>
              <Toolbar
                // variant="dense"
                className={st.tootlbarSecondary}
              >
                <Typography
                  color="inherit"
                  noWrap={false}
                  align="center"
                  className={st.toolbarLinks}
                >
                  {
                    pipe(
                      createLinksConfiguration,
                      createArrayOfJSXLinks
                    )()
                  }
                </Typography>
              </Toolbar>
            </header>
            <nav>
              <Toolbar>
                <p>
                  <RouterLink to="/">Home</RouterLink>
                </p>
                <p>
                  <RouterLink to="/list">List</RouterLink>
                </p>
                <p>
                  <RouterLink to="/user">User</RouterLink>
                </p>
              </Toolbar>
            </nav>
            <section>
              <Switch>
                <Route exact={true} path="/" component={HomePage} />
                <Route exact={true} path="/user" component={User} />
                <Route exact={true} path="/list" component={List} />
              </Switch>
            </section>
            <footer className="App-footer">
              App Footer
            </footer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;