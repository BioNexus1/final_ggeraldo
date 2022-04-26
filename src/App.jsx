import './App.css';

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Box/ItemListContainer'

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
