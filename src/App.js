import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/Aboutme/About'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
