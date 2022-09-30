import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from "./component/Home"
import CartDaitels from './component/CartDaitels';
import {Routes,Route} from 'react-router-dom'
import Contact from './component/Contact';

function App() {
  return (
   <>
   <Header/>
   <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/Cart/:id' element={<CartDaitels />} />
   <Route path='/Contact' element={<Contact />} />
   </Routes>
   </>
  );
}

export default App;
