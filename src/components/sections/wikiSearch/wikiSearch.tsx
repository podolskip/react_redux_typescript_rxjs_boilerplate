import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import IntegrationAutosuggest from './wikiSuggest/wikiSuggest';
export class WikiSearch extends React.Component {
  public render() {
    return (
      <section>
        <input type="textfield" />
        <IntegrationAutosuggest />
        <Button> Submit </Button>
      </section>
    );
  }
}

export default connect()(WikiSearch);