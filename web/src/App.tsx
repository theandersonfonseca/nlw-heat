import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components/macro';
import theme from './styles/theme';

import { Container } from './components/Container';
import { MessageList } from './components/MessageList';
import { LoginBox } from './components/LoginBox';
import { SendMessageForm } from './components/SendMessageForm';

import { useAuth } from './hooks/useAuth';

function App() {
  const { user } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <Container signed={!!user}>
        <MessageList />
        {!!user ? <SendMessageForm /> : <LoginBox />}
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
