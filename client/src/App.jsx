import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Download from './pages/Download.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Features from './pages/Features.jsx';
import Work from './pages/Work.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main >
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/work" element={<Work />} />
          <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}


export default App;