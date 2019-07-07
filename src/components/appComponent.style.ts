import { cssRaw, style } from 'typestyle';

export const appComponentStyle = {
  sectionStyle: style({
    margin: '0 5% 64px 5%',
  }),
};

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

