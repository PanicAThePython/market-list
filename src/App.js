import './App.css';
import { InitialPage } from './pages/initial';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { RegisterPage } from './pages/register';
import { ForgotPasswordPage } from './pages/forgotPassword';
import { Header } from './components/Header';
import { Error404Page } from './pages/404Error';
import { ProfilePage } from './pages/profile';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<InitialPage/>}/>
        <Route path='/registry' element={<RegisterPage/>}/>
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='/forgot_password' element={<ForgotPasswordPage/>}/>
        <Route path='*' element={<Error404Page/>} />
      </Routes>
  </Router>
  );
}

export default App;
