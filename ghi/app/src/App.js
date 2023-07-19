import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import HatsList from './HatsList';

function App(props) {
    if (props.hats === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="hats">
            <Route path="/hats" element={<HatsList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
