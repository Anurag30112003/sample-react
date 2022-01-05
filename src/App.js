// eslint-disable-next-line
import logo from './logo.svg'; //
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
// eslint-disable-next-line
import {Link} from 'react-router-dom';
// ?? Body
function App() {
  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  );
}
export default App;