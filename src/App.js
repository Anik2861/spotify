import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import ArtistTops from './Pages/Home/ArtistTops/ArtistTops';
import ArtistTopDetails from './Pages/ArtistTopDetails/ArtistTopDetails';


function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<ArtistTops></ArtistTops>}></Route>
        <Route path='/details/:id' element={<ArtistTopDetails></ArtistTopDetails>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
