import{BrowserRouter, Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home/Home';

import Add from './Pages/Add/Add';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import Detail from './Pages/Detail/Detail';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/:id' element={<Detail/>}/>
      <Route path='/add' element={<Add/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  );
  
}

export default App;

