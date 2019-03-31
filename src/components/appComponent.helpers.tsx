import * as React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { appComponentStyle as st } from './appComponent.style';

class NavLinkContent implements NavLinkProps {
  public link: string;
  public to: string;
}

export const createLinksConfiguration = (): NavLinkContent[] => ([
  {
    to: '/',
    link: 'Home',
  },
  {
    to: '/wiki',
    link: 'Wiki-Search',
  },
  {
    to: '/user',
    link: 'User Details',
  },
]);

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

export const _pipeFn = (fn1: any, fn2: any) => fn2(fn1());

export const pipe = (...arrayOfFn: any) => () => arrayOfFn.reduce(_pipeFn);