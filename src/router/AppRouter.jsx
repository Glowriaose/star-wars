import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Signup from '../pages/Signup';
import { Login } from '../pages/Login';
import DashBoard from '../components/Dashboard';


const AppRouter =()=>{

    return(
        <BrowserRouter>
         <Routes>
            <Route path='/' element= {<HomePage/>}/>
            <Route path='signup' element= {<Signup/>}/>
            <Route path='login' element= {<Login/>}/>
             <Route path='/DashBoard' element= {<DashBoard/>}/>
        </Routes>
        </BrowserRouter>
       
    )
}

export default AppRouter;