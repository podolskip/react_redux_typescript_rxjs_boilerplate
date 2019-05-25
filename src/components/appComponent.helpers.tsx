import * as React from 'react';
import { NavLinkProps } from 'react-router-dom';
import { Route } from 'react-router';
import HomePage from 'src/components/sections/homePage/homePage';
import WikiSearch from 'src/components/sections/wikiSearch/wikiSearch';
import User from 'src/components/sections/user/user';

export class NavLinkContent implements NavLinkProps {
  public link: string;
  public to: string;
  public component: React.ComponentType;
}

export const createLinksConfiguration = (): NavLinkContent[] => ([
  {
    to: '/',
    link: 'Home',
    component: HomePage,
  },
  {
    to: '/wiki',
    link: 'Wiki-Search',
    component: WikiSearch,
  },
  {
    to: '/user',
    link: 'User Details',
    component: User,
  },
]);

export const createRouteComponents = (linkObject: NavLinkContent) => (
  <Route
    exact={true}
    path={linkObject.to}
    component={linkObject.component}
  />
);