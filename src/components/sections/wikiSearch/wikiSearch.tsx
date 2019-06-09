import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import IntegrationAutosuggest from './wikiSuggest/wikiSuggest';
import { style } from 'typestyle';

const cl = {
  sectionStyle: style({
    maxWidth: '300px',
    display: 'inline-block',
  }),
};


export class WikiSearch extends React.Component {
  public render() {
    return (
      <section
        className={cl.sectionStyle}
      >
        <input type="textfield" />
        <IntegrationAutosuggest />
        <Button> Submit </Button>
      </section>
    );
  }
}

export default connect()(WikiSearch);