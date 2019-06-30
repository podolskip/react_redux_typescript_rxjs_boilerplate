// tslint:disable:max-line-length
import * as React from 'react';
import { connect } from 'react-redux';
import { homeCl } from './homePage.style';

const dependenciesJSON = {
  'dependencies': {
    'react': '^16.8.2',
    'react-dom': '^16.8.2',
    'react-scripts-ts': '3.1.0',
  },
  'devDependencies': {
    '@types/jest': '^24.0.5',
    '@types/node': '^11.9.4',
    '@types/react': '^16.8.3',
    '@types/react-dom': '^16.8.2',
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