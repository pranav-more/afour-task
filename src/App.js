import './App.css';
import Nav from './Components/Nav'; 
import Home from './Components/Home'; 
import AllData from './Components/AllData'; 
import AddData from './Components/AddData'; 
import NotFound from './Components/NotFound'; 
import { BrowserRouter,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
   <Nav />
    <Switch>
   <Route exact path="/" component={Home} />
   <Route exact path="/all" component={AllData} />
   <Route exact path="/add" component={AddData} />
   <Route component={NotFound} />
    </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
