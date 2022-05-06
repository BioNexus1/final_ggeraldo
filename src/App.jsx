import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Box/ItemListContainer'
import ItemLDetailContainer from './components/Box/ItemDetailContainer'

function App() {

  return (
    <div className="App">
      <NavBar/>
      {/* <Router> */}
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemLDetailContainer/>} />
        </Routes>
      {/* </Router> */}
      {/* <Button texto='Button 1' color='red' />
      <Button texto='Button 2' color='blue' />
      <Button /> */}
      {/* <ItemLDetailContainer productName='camiseta CK'  productDescription='Descripcion' productStock={4} price={5000}/> */}
      {/* <ItemListContainer greeting='Item List container'/> */}

    </div>
  );
}

export default App;
