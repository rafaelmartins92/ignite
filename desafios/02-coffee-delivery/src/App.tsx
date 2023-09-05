import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './routes';

import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
