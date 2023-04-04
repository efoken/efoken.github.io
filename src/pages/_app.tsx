import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import createEmotionCache from '../utils/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const palette = {
  light: {
    mode: 'light' as const,
    background: {
      default: '#fafafa',
    },
    primary: {
      main: '#4e4e5b',
    },
    text: {
      primary: '#737373',
      secondary: '#444',
    },
  },
  dark: {
    mode: 'dark' as const,
    background: {
      default: '#0d0d0d',
    },
    primary: {
      main: '#4e4e5b',
    },
    text: {
      primary: '#737373',
      secondary: '#444',
    },
  },
};

const App: FC<AppProps & { emotionCache?: EmotionCache }> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <title>Eike Foken</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider
      theme={createTheme({
        palette: palette.light,
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
        components: {
          MuiAvatar: {
            styleOverrides: {
              circular: {
                backgroundColor: 'transparent',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                borderStyle: 'solid',
                borderWidth: 8,
                height: 160,
                width: 160,
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              text: {
                color: 'rgba(255, 255, 255, 0.65)',
                padding: 8,

                '&.active': {
                  color: '#fff',
                },
              },
            },
          },
          MuiCssBaseline: {
            styleOverrides: {
              a: {
                color: palette.light.primary.main,
                textDecoration: 'none',

                '&:focus-visible': {
                  outlineColor: '#000',
                },
              },
              '@page': {
                marginTop: '-10mm',
                size: 'a4',
              },
              '@media print': {
                body: {
                  marginBottom: 0,
                  marginLeft: '10mm',
                  marginRight: '10mm',
                  marginTop: 0,
                },
              },
            },
          },
          MuiDivider: {
            styleOverrides: {
              root: {
                pageBreakBefore: 'avoid',
              },
            },
          },
          MuiDrawer: {
            styleOverrides: {
              root: {
                width: 272,
              },
              paper: {
                backgroundColor: palette.light.primary.main,
              },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              root: {
                padding: 12,
              },
            },
          },
          MuiLink: {
            defaultProps: {
              underline: 'hover',
            },
          },
          MuiTypography: {
            styleOverrides: {
              gutterBottom: {
                marginBottom: 8,
              },
            },
            defaultProps: {
              variant: 'body2',
            },
          },
        },
      })}
    >
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
);

export default App;
