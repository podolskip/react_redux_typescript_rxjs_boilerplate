import * as React from 'react';
// Material-ui
import IconButton from '@material-ui/core/IconButton';
import Email from '@material-ui/icons/Email';
import Whatshot from '@material-ui/icons/Whatshot';
import School from '@material-ui/icons/School';
import Face from '@material-ui/icons/Face';
// import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
// import { SvgIconProps } from '@material-ui/core/SvgIcon';
// Styles
import { footerStyle as cls } from './footer.styles';

export type FooterIconType = {
  link: string;
  name: string;
  description: string;
  displayIcon: () => JSX.Element;
};

export const footerIconsConfiguraition = [
  {
    link: 'https://www.google.com/gmail/',
    name: 'Gmail',
    description: 'Get it touch with me through email!',
    displayIcon: () => <Email />,
  },
  {
    link: 'https://www.linkedin.com/',
    name: 'LinkedIn',
    description: 'Check out my linked-In profile!',
    displayIcon: () => <Face />,
  },
  {
    link: 'https://www.udemy.com/',
    name: 'Udamy',
    description: 'Upgrade your skills !',
    displayIcon: () => <School />,
  },
  {
    link: 'https://www.freecodecamp.org/',
    name: 'FreeCodeCamp',
    description: 'Get yourself another set of free lessons...',
    displayIcon: () => <Whatshot />,
  },
] as FooterIconType[];

export const createIconButon = ({ displayIcon, name, description, link }: FooterIconType) => (
  <Tooltip
    title={`${name} - ${description}`}
  >
    <a
      href={link}
      target={'_blank'}
    >
      <IconButton
        className={cls.footerIconButton}
      >
        {displayIcon()}
      </IconButton>
    </a>
  </Tooltip>
);

class Footer extends React.Component {
  public render() {
    return (
      <footer className={cls.appFooter}>
        <div
          className={cls.toolbarFooter}
        >
          {
            footerIconsConfiguraition
              .map(createIconButon)
          }
        </div>
      </footer>
    );
  }
}

export default Footer;