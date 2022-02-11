import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';

/**I use the application palettes for Material UI */
const theme = createTheme({
  palette: {
    primary: {
      // --primary-background
      main: '#0276DB'
    },
    text: { 
      // --secondary-color
      primary: '#173753' ,
      // --tertiary-color
      secondary: '#5b7186',
    }

  },
  typography: {
    fontFamily: [
      'SF Pro Display',
      'Roboto'
    ].join(','),
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);