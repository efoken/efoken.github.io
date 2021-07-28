import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';

const palette = createPalette({
  primary: {
    main: '#4e4e5b',
  },
  text: {
    primary: '#757575',
    secondary: '#444',
  },
});

const App: React.VFC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <>
      <Head>
        <title>Eike Foken</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider
        theme={createTheme({
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
              lineHeight: 88 / 96,
              textTransform: 'uppercase',
            },
            h2: {
              fontFamily: '"Saira Extra Condensed", sans-serif',
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 72 / 56,
              textTransform: 'uppercase',
            },
            h3: {
              fontFamily: '"Saira Extra Condensed", sans-serif',
              fontSize: 32,
              fontWeight: 700,
              lineHeight: 40 / 32,
              textTransform: 'uppercase',
            },
            h4: {
              fontFamily: '"Saira Extra Condensed", sans-serif',
              fontSize: 24,
              fontWeight: 500,
              lineHeight: 36 / 24,
              textTransform: 'uppercase',
            },
            body1: {
              fontSize: 18,
              letterSpacing: 'normal',
              lineHeight: 24 / 18,
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
              circular: {
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
            MuiTypography: {
              gutterBottom: {
                marginBottom: 8,
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
};

export default App;
