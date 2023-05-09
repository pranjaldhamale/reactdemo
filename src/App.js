
import './App.css';
import Loginform from './component/Loginform';
import Newreg from './component/Newreg';

import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
<BrowserRouter> 
<Routes>
<Route path='/' element= {<Loginform></Loginform>}></Route>
<Route path='/registration' element= {<Newreg/>}></Route>

</Routes>
  </BrowserRouter>

    {/* <div className="container">  */}
    {/* <Loginform /> */}
    {/* <Newreg/> */}
    {/* </div>  */}
    </>
  );
}

export default App;
