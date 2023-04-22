import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';
import Home from './Home';
import Rules from './Rules';
import Faq from './Faq';
import Articles from './Articles';
import Archived from './Archived';
import About from './About';
import NotFound from './NotFound';
import Footer from './Footer';
import ArticleDetails from './ArticleDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarMobile />
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/rules" element={<Rules />}/>
            <Route path="/faq" element={<Faq />}/>
            <Route path="/articles" element={<Articles />}/>
            <Route path="/archived" element={<Archived />}/>
            <Route path="/articles/:id" element={<ArticleDetails />}/>
            <Route path="/about" element={<About />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
