import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar/NavBar'
import Box from './components/Box'
import ItemListContainer from './components/Box/ItemListContainer'
import Button from './components/Button'

function App() {

  return (
    <div className="App">
      <NavBar/>
      {/* <Button texto='Button 1' color='red' />
      <Button texto='Button 2' color='blue' />
      <Button /> */}
      <ItemListContainer greeting='Item List Container'/>
    </div>
  );
}

export default App;
