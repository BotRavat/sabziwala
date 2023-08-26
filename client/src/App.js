import './App.css';
import Featured from './components/featured/Featured';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/homepage/Homepage';


function App() {
  return (
   <>
    <Navbar/>
    <Homepage/>
    <Featured/>
   </>
  );
}

export default App;
