import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './routes';

import { CartContextProvider } from './contexts/CartContext';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
