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
    backgroundColor: 'white',
  }),
  toolbarFooter: style({
    justifyContent: 'space-evenly',
    alignItems: 'center',
    maxHeight: '50px',
  }),
  footerIconButton: style({
    padding: '7px 5%',
  }),
};