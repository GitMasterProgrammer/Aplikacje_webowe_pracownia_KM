import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/'
import Paragraph from './components/Paragraph/'
import Clicker from './components/clicker';

function App() {
  return (
    <>
      <Navbar />
        <Paragraph content="Hello world" />
      <Clicker/>
    </>
  );
}

export default App;
