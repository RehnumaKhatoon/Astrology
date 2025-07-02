// import logo from './logo.svg';
import './App.scss';
import Home from 'pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from 'components/Header';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Home />
    </div>

  );
}

export default App;
