import Router from './Router';
import GlobalStyle from './@style/GlobalStyle';
import './@style/font.css';
import AppContainer from './@components/templates/AppContainer';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const context = {
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60,
        cacheTime: 1000 * 60 * 5,
      },
    },
  };
  const queryClient = new QueryClient(context);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <AppContainer>
          <Router />
        </AppContainer>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
