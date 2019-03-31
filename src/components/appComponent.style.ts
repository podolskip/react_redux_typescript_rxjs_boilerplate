import { cssRaw, style, media } from 'typestyle';

cssRaw(`

    .App {
        text-align: center;
    }

    .App-logo {
        animation: App-logo-spin infinite 20s linear;
        height: 80px;
    }

    .App-header {
        background-color: #222;
        height: 150px;
        padding: 20px;
        color: white;
    }

    .App-title {
        font-size: 1.5em;
    }

    .App-intro {
        font-size: large;
    }

    @keyframes App-logo-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`);

export const appComponentStyle = {
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