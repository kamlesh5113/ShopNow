import { BrowserRouter,Routes,Route,Outlet} from 'react-router-dom';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import MenShirt from './component/MenShirt';
import  Cart  from './component/Cart';
import  {About } from './component/About';
import {Contact}  from './component/Contact';

function App() {
  return (
     <>
     
    <BrowserRouter>
    <Navbar/>
    {/* <Routes> */}
     {/* <Route path="/" element={<LayoutsWithNavbar />}/> */}
      <Route path="/" exact component={Home}/>
      <Route path="/Login" exact component={Login}/>
      <Route path="/Signup" exact component={Signup}/>
      <Route path="/MenShirt" exact component={MenShirt}/>
      <Route path="/cart" exact component={Cart}/>
      <Route path="/About" exact component={About}/>
      <Route path="/Contact" exact component={Contact}/>
      {/* </Routes> */}
    </BrowserRouter>
    </>
  );
}

export default App;
