import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Rules from './Rules';
import Faq from './Faq';
import Articles from './Articles';
import About from './About';
import NotFound from './NotFound';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/Rules" element={<Rules />}/>
            <Route path="/Faq" element={<Faq />}/>
            <Route path="/Articles" element={<Articles />}/>
            <Route path="/About" element={<About />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
