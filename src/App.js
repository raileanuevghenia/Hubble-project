import {Container} from './components/styled/Container.styled'
import {ThemeProvider} from 'styled-components'
import Header from './components/Header'

const theme = {
  colors:{
    header: 'red',
    body: 'blue',
    footer: 'brown',
  }
}
function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <Header />
    <Container>
      <h1>Hello World</h1>
    </Container>
    </>
    </ThemeProvider>
  );
}

export default App;
