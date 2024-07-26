import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import Navigations from './Navigations';
import Header from './components/Header';

const App=()=> {
  return (
    <BrowserRouter>
      <Header />
      <Navigations />
    </BrowserRouter>
  );
}

export default App;
