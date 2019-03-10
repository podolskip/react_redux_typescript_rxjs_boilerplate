import { cssRaw, style } from 'typestyle';

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
  headerBtn: style({
    marginLeft: '5px',
  }),
  navLink: style({
    textDecoration: 'none',
    color: 'unser',
  }),
};