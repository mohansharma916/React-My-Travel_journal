import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import data from "./data"

const cards=data.map(item =>{
  return (
    <Card
    item={item}
      />
    
  )
})


function App() {
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}
 
export default App;
