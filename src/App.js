import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
    return (

<>
<Navbar title="React-App" Aboutsession="About"/>
<div className="container my - 3" >
    <TextForm heading="Enter the text to analyze belowa"/>
    </div>

</>
    );
}

export default App;