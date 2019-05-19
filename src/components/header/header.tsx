import * as React from 'react';
// MATERIAL-UI
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Fingerprint from '@material-ui/icons/Fingerprint';
// STYLES
import { headerComponentStyles as cls } from './header.styles';
// helpers
import { pipe } from 'src/configuration/app.helpers';
import { createArrayOfJSXLinks } from './header.helpers';
import { createLinksConfiguration } from 'src/components/appComponent.helpers';

class Header extends React.Component {
  public render() {
    return (
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
    );
  }
}

export default Header;