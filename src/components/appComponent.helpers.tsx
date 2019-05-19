import * as React from 'react';
import { NavLinkProps } from 'react-router-dom';
import User from './testComponent';
import { Route } from 'react-router';

export class NavLinkContent implements NavLinkProps {
  public link: string;
  public to: string;
  public component: React.ComponentType;
}

const HomePage: React.SFC = (props: any) => {
  return (
    <div>
      HomePage
      </div>
  );
};

const List: React.SFC = (props: any) => {
  return (
    <div>
      List
    </div>
  );
};

export const createLinksConfiguration = (): NavLinkContent[] => ([
  {
    to: '/',
    link: 'Home',
    component: HomePage,
  },
  {
    to: '/wiki',
    link: 'Wiki-Search',
    component: List,
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