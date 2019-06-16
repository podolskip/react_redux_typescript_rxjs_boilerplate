import * as React from 'react';
import {
  Switch,
  Router,
} from 'react-router';
import history from 'src/configuration/history';
// HELPERS
import { createLinksConfiguration, createRouteComponents } from './appComponent.helpers';
// STYLES
import './appComponent.style';
import { appComponentStyle as cl } from './appComponent.style';
// Header
import Header from './header/header';
// Footer
import Footer from './footer/footer';

class App extends React.Component<any, any> {
  public render() {
    return (
      <Router
        history={history}
      >
        <div>
          <div className="App">
            <Header />
            <section className={cl.sectionStyle}>
              <Switch>
                {
                  createLinksConfiguration()
                    .map(createRouteComponents)
                }
              </Switch>
            </section>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;