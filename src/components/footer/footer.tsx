import * as React from 'react';
// Material-ui
import Email from '@material-ui/icons/Email';
import Android from '@material-ui/icons/Android';
import LocationOn from '@material-ui/icons/LocationOn';
import Whatshot from '@material-ui/icons/Whatshot';
import Toolbar from '@material-ui/core/Toolbar';
// Styles
import { footerStyle as cls } from './footer.styles';

class Footer extends React.Component {
  public render() {
    return (
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
    );
  }
}

export default Footer;