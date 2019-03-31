import * as React from 'react';
import {
  Route,
  Switch,
  Router,
} from 'react-router';
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
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Fingerprint from '@material-ui/icons/Fingerprint';
import Email from '@material-ui/icons/Email';
import Android from '@material-ui/icons/Android';
import LocationOn from '@material-ui/icons/LocationOn';
import Whatshot from '@material-ui/icons/Whatshot';
// STYLES
import { appComponentStyle as cls } from './appComponent.style';
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
            <header className={cls.appHeader}>
              <Toolbar className={cls.toolbarMain}>
                <Grid
                  container={true}
                  xs={12}
                  item={true}
                  alignItems={'center'}
                  justify={'center'}
                  direction={'row'}
                >
                  <Grid xs={2} item={true} />
                  <Grid xs={8} item={true} >
                    <Typography
                      component="h2"
                      variant="h5"
                      color="inherit"
                      align="center"
                      noWrap={true}
                      className={cls.toolbarTitle}
                    >
                      React-Redux Boilerplate
                  </Typography>
                  </Grid>
                  <Grid
                    xs={1}
                    item={true}
                    className={cls.headerBtnGrid('right')}
                  >
                    <Button
                      // variant="outlined"
                      size="small"
                      className={cls.headerBtn}
                    >
                      <AssignmentInd />
                      <div
                        className={cls.headerBtnText}
                      >
                        Sign In
                      </div>
                    </Button>
                  </Grid>
                  <Grid
                    xs={1}
                    item={true}
                    className={cls.headerBtnGrid('left')}
                  >
                    <Button
                      // variant="outlined"
                      size="small"
                      className={cls.headerBtn}
                    >
                      <Fingerprint />
                      <div
                        className={cls.headerBtnText}
                      >
                        Sign Up
                      </div>
                    </Button>
                  </Grid>
                </Grid>
              </Toolbar>
              <nav>
                <Toolbar
                  // variant="dense"
                  className={cls.tootlbarSecondary}
                >
                  <Typography
                    color="inherit"
                    noWrap={false}
                    align="center"
                    className={cls.toolbarLinks}
                  >
                    {
                      pipe(
                        createLinksConfiguration,
                        createArrayOfJSXLinks
                      )()
                    }
                  </Typography>
                </Toolbar>
              </nav>
            </header>
            <section>
              <Switch>
                <Route exact={true} path="/" component={HomePage} />
                <Route exact={true} path="/user" component={User} />
                <Route exact={true} path="/list" component={List} />
              </Switch>
            </section>
            <footer className={cls.appFooter}>
              <Toolbar
                className={cls.toolbarFooter}
              >
                <Email />
                <Android />
                <LocationOn />
                <Whatshot />
              </Toolbar>
            </footer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;