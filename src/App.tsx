import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Formations from '@/pages/Formations';
import FormationWordPress from '@/pages/FormationWordPress';
import FormationIAPython from '@/pages/FormationIAPython';
import Accessibilite from '@/pages/Accessibilite';
import APropos from '@/pages/APropos';
import Indicateurs from '@/pages/Indicateurs';
import Contact from '@/pages/Contact';
import MentionsLegales from '@/pages/MentionsLegales';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/formation-wordpress" element={<FormationWordPress />} />
            <Route path="/formation-ia-python" element={<FormationIAPython />} />
            <Route path="/accessibilite" element={<Accessibilite />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/indicateurs" element={<Indicateurs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
