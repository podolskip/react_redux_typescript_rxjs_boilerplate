import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { headerComponentStyles as st } from './header.styles';
import { NavLinkContent } from 'src/components/appComponent.helpers';

export const createJSXLink = (props: NavLinkContent, index: number): JSX.Element => (
  <NavLink
    key={index}
    to={props.to}
    className={st.navLink}
    {...props} >
    <Button>
      {props.link}
    </Button>
  </NavLink>
);

export const createArrayOfJSXLinks = (
  linksConfig: NavLinkContent[]
): JSX.Element[] => linksConfig.map(createJSXLink);

