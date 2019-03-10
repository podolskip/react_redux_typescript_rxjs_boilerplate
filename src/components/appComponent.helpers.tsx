import * as React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { appComponentStyle as st } from './appComponent.style';

class NavLinkContent implements NavLinkProps {
  public linkContent: string;
  public to: string;
}

export const createLinksConfiguration = (): NavLinkContent[] => ([
  {
    to: '/',
    linkContent: 'Home',
  },
  {
    to: '/wiki',
    linkContent: 'Wiki-Search',
  },
  {
    to: '/user',
    linkContent: 'User Details',
  },
]);

export const createJSXLink = (props: NavLinkContent): JSX.Element => (
  <NavLink
    to={props.to}
    className={st.navLink}
    {...props} >
    <Button>
      {props.linkContent}
    </Button>
  </NavLink>
);

export const createArrayOfJSXLinks = (
  linksConfig: NavLinkContent[]
): JSX.Element[] => linksConfig.map(createJSXLink);

export const _pipeFn = (fn1: any, fn2: any) => fn2(fn1());

export const pipe = (...arrayOfFn: any) => () => arrayOfFn.reduce(_pipeFn);