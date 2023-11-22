import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Header from './components/header/Header';
import Movie from './pages/Movie';
import Home from './pages/Home';
import Celebirity from './pages/Celebirity';
import Tv from './pages/Tv';
import NotFound from './pages/NotFound';
import ContentDetail from './pages/ContentDetail';
import Login from './pages/Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Body>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie' element={<Movie />} />
            <Route path='/movie/:title' element={<ContentDetail />} />
            <Route path='/tv' element={<Tv />} />
            <Route path='/tv/:title' element={<ContentDetail />} />
            <Route path='/celebirity' element={<Celebirity />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Body>
      </BrowserRouter>
    </div>
  );
}

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export default App;
