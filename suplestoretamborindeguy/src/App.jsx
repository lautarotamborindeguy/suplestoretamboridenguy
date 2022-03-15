import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';

function App() {
  return ( 
    <div>
      <NavBar></NavBar>
      <ItemListContainer />
    </div>
  );
}

export default App;
