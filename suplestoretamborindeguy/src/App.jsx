import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
function App() {
  return ( 
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/"  element={<ItemListContainer />} />
          <Route path="/productos/:categoryId" element={ <ItemListContainer/>}/>
          <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/detalles"  element={<ItemDetailContainer />} />
          <Route path="/cart"/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
