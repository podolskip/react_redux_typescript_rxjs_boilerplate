import { style } from 'typestyle';

export const footerStyle = {
  appFooter: style({
    position: 'fixed',
    left: 0,
    bottom: 0,
    textAlign: 'center',
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    borderTop: '1px solid grey',
  }),
  toolbarFooter: style({
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }),
};