
import './App.css';
import LoginPage from './components/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupPage from './components/SignupPage';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<LoginPage/>}/>
        <Route path='/signup' element = {<SignupPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
