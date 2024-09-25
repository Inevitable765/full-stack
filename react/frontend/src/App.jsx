import Signup from './pages/Signup';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { useSelector, useDispatch } from 'react-redux';
import Login from './pages/Login';
import { increment, decrement } from './redux/counterSlice';
import Homepage from './pages/Homepage';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import GoogleHandler from './components/GoogleHandler';
export default function App() {
  //to get the value
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.count);

  return (
    <div>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/auth/google/callback' element={<GoogleHandler/>}/>
 <Route element={<PrivateRoute allowrole={['user']} />}>
            <Route path="/" element={<Homepage />} />
          </Route>


        <Route element={<PrivateRoute allowrole={['admin']} />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        
         
        </Route>
      </Routes>
      <Toaster position="bottom-right" />
    </div>
  );
}
