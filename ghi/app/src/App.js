import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ShoeList from './ShoeList';
import CreateShoe from './CreateShoe';
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
          <Route path="/shoes">
            <Route path="" element={<ShoeList shoes={props.shoes}/>}/>
            <Route path="/shoes/create" element={<CreateShoe/>}/>
          </Route>
          <Route path="hats">
            <Route path="/hats" element={<HatsList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
