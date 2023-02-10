import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout'
import Main from './Components/Main/Main'
import Cities from './Components/Cities/Cities';

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main/>}/>
          <Route path='/cities' element={<Cities />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
