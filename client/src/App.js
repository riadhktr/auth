import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AdminDash from './pages/AdminDash';
import UserDash from './pages/UserDash';

function App() {
  return (
    <div className="App">
    
        <Routes>
          <Route path="/signup" element={<Register/>}/>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/admin" element={<AdminDash/>}/>
          <Route path="/user" element={<UserDash/>}/>

        </Routes>
    </div>
  );
}

export default App;
