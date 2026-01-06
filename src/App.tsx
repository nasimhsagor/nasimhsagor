import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Hire from './components/Hire'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App font-sans text-gray-900">
      <Navbar />
      <Home />
      <About />
      <Skills />
      {/* <Portfolio /> */}
      <Hire />
      {/* <Certificates /> */}
      <Contact />
      <Footer />
    </div>
  );
}


export default App
