import { style, media } from 'typestyle';


export const headerComponentStyles = {
  appHeader: style({
    width: 'auto',
    marginLeft: '5%',
    marginRight: '5%',
  }),
  toolbarMain: style({
    borderBottom: '1px solid grey',
    justifyContent: 'space-between',
  }),
  toolbarTitle: style({
    flex: 1,
  }),
  toolbarLinks: style({
    flex: 1,
  }),
  tootlbarSecondary: style({
    justifyContent: 'space-between',
  }),
  headerBtnGrid: (align: 'left' | 'right') => style({},
    media(
      { maxWidth: '1286px' },
      { textAlign: align })
  ),
  headerBtn: style({
    border: '1px solid rgba(0, 0, 0, 0.23)',
    borderRadius: '4px',
    marginLeft: '5px',
    fontSize: '11px',
  },
    media(
      { maxWidth: '1286px' },
      { minWidth: '36px' })
  ),
  headerBtnText: style({
    display: 'block',
    transition: 'display .2s',
  },
    media(
      { maxWidth: '1286px' },
      { display: 'none' })
  ),
  navLink: style({
    textDecoration: 'none',
    color: 'unser',
  }),
};