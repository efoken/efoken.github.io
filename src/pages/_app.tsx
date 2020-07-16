import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import createPalette from '@material-ui/core/styles/createPalette';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

const palette = createPalette({
  primary: {
    main: '#4e4e5b',
  },
  text: {
    primary: '#757575',
    secondary: '#444',
  },
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Eike Foken</title>
    </Head>
    <ThemeProvider
      theme={createMuiTheme({
        palette,
        typography: {
          fontWeightBold: 800,
          allVariants: {
            fontFamily: 'Muli, sans-serif',
          },
          h1: {
            fontFamily: '"Saira Extra Condensed", sans-serif',
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 5.5 / 6,
            textTransform: 'uppercase',
          },
          h2: {
            fontFamily: '"Saira Extra Condensed", sans-serif',
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.2,
            textTransform: 'uppercase',
          },
          h3: {
            fontFamily: '"Saira Extra Condensed", sans-serif',
            fontSize: 32,
            fontWeight: 700,
            lineHeight: 1.2,
            textTransform: 'uppercase',
          },
          h4: {
            fontFamily: '"Saira Extra Condensed", sans-serif',
            fontSize: 24,
            fontWeight: 500,
            lineHeight: 1.5,
            textTransform: 'uppercase',
          },
          body1: {
            fontSize: 18,
            letterSpacing: 'normal',
            lineHeight: 1.5,
          },
          body2: {
            fontSize: 16,
            letterSpacing: 'normal',
            lineHeight: 1.5,
          },
          button: {
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: 0.8,
            lineHeight: 1.5,
            textTransform: 'uppercase',
          },
        },
        overrides: {
          MuiAvatar: {
            circle: {
              borderColor: 'rgba(255, 255, 255, 0.2)',
              borderStyle: 'solid',
              borderWidth: 8,
              height: 160,
              width: 160,
            },
          },
          MuiButton: {
            text: {
              color: 'rgba(255, 255, 255, 0.65)',
              padding: 8,

              '&.active': {
                color: '#fff',
              },
            },
          },
          MuiDrawer: {
            root: {
              width: 272,
            },
            paper: {
              backgroundColor: palette.primary.main,
            },
          },
        },
        props: {
          MuiTypography: {
            variant: 'body2',
          },
        },
      })}
    >
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
