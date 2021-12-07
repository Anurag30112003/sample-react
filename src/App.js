import logo from './logo.svg';
import './App.css';

// ?? Header 
function Header(){
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
}

// ?? Body
function App() {
  let hello = "js"
  return (
    // navbar react
   <p>this is main component</p>
  );
}

// ?? Footer
function Footer(){
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
}

// export default App;
export {App,Header,Footer} ;
// export {Header,footer};
