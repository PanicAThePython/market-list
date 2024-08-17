import './App.css';
import { InitialPage } from './pages/initial';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { RegisterPage } from './pages/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<InitialPage/>}/>
        <Route path='/registry' element={<RegisterPage/>}/>
        <Route path='/profile'>
          {/* <Categoria/> */}
        </Route>
        <Route path='/posts/:id'>
          {/* <Post/> */}
        </Route>
        <Route path='*'>
          {/* <Pagina404/> */}
        </Route>
      </Routes>
  </Router>
  );
}

export default App;
