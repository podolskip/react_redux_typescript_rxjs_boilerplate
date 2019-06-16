import * as React from 'react';
// Material-ui
import IconButton from '@material-ui/core/IconButton';
import Email from '@material-ui/icons/Email';
import Android from '@material-ui/icons/Android';
import LocationOn from '@material-ui/icons/LocationOn';
import Whatshot from '@material-ui/icons/Whatshot';
import Toolbar from '@material-ui/core/Toolbar';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
// Styles
import { footerStyle as cls } from './footer.styles';

export type FooterIconType = {
  link: string;
  name: string;
  description: string;
  displayIcon: React.FunctionComponent<SvgIconProps>;
};

export const createIconButon = ({ displayIcon }: FooterIconType) => (
  <IconButton>
    {displayIcon}
  </IconButton>
);

export const footerIconsConfiguraition = [
  {
    link: 'https://www.google.com/gmail/',
    name: 'Gmail',
    description: 'Get it touch with me through email!',
    displayIcon: Email,
  },
] as FooterIconType[];

class Footer extends React.Component {
  public render() {
    return (
      <footer className={cls.appFooter}>
        <Toolbar
          className={cls.toolbarFooter}
        >
          {
            footerIconsConfiguraition
              .map(createIconButon)
          }
          <IconButton>
            <Android />
          </IconButton>
          <IconButton>
            <LocationOn />
          </IconButton>
          <IconButton>
            <Whatshot />
          </IconButton>
        </Toolbar>
      </footer>
    );
  }
}

export default Footer;