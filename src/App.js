import './App.css';
import Layout from './Layout/Layout'
import Cities from './Components/Cities/Cities';
import { ThemeProvider } from './Context/Context';

function App() {

  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
