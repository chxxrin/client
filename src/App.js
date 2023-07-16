import Router from './Router';
import GlobalStyle from './@style/GlobalStyle';
import './@style/font.css';
import AppContainer from './@components/templates/AppContainer';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Router />
      </AppContainer>
    </>
  );
}

export default App;
