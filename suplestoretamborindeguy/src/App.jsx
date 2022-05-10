import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {CartContext} from './context/CartContext'
import { CustomContext } from './components/CustomContext';

function App() {

  return ( 
    <CartContext.Provider>
      <CustomContext>
        <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
              <Route path="/"  element={<ItemListContainer />} />
              <Route path="/productos/:categoryId" element={ <ItemListContainer/>}/>
              <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
              <Route path="/CartContainer" element={<CartContainer />}/>
              <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
      </CustomContext>
    </CartContext.Provider>
  );
}

export default App;
