// tslint:disable:max-line-length
import * as React from 'react';
import { connect } from 'react-redux';
import { homeCl } from './homePage.style';

const dependenciesJSON = {
  'dependencies': {
    '@material-ui/core': '^3.9.2',
    '@material-ui/icons': '^3.0.2',
    'axios': '^0.18.0',
    'react': '^16.8.2',
    'react-autosuggest': '^9.4.3',
    'react-dom': '^16.8.2',
    'react-redux': '^6.0.1',
    'react-router': '^4.3.1',
    'react-router-dom': '^4.3.1',
    'react-router-redux': '^4.0.8',
    'react-scripts-ts': '3.1.0',
    'redux': '^4.0.1',
    'redux-observable': '^1.0.0',
    'rxjs': '^6.4.0',
    'typestyle': '^2.0.1',
  },
  'devDependencies': {
    '@types/autosuggest-highlight': '^3.1.0',
    '@types/axios': '^0.14.0',
    '@types/jest': '^24.0.5',
    '@types/node': '^11.9.4',
    '@types/react': '^16.8.3',
    '@types/react-autosuggest': '^9.3.8',
    '@types/react-dom': '^16.8.2',
    '@types/react-redux': '^7.0.1',
    '@types/react-router': '^4.4.4',
    '@types/react-router-dom': '^4.3.1',
    '@types/react-router-redux': '^5.0.18',
    'autosuggest-highlight': '^3.1.1',
    'redux-devtools': '^3.5.0',
    'typescript': '^3.3.3',
  },
};

export class HomePage extends React.Component {
  public render() {
    return (
      <section >
        <h1>
          Welcome to the main page of React redux boilerplate
      </h1>
        <h3>Technology stack covered by this project:</h3>
        <div className={homeCl.divTable}>
          <div className={homeCl.divInlineBlock}>
            <pre
              className={homeCl.jsonStyling}
            >
              {JSON.stringify(dependenciesJSON, undefined, 2)}
            </pre>
          </div>
        </div>
      </section>
    );
  }
}

export default connect()(HomePage);