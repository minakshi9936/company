import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HR from "./Services/HR";
import FM from "./Services/FM";
import Supply from "./Services/Supply";
import Feature from "./components/Feature";
import Client from "./components/Client";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import MapClients from "./components/MapClients";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar on top */}
      <Navbar />

      {/* Main content */}
      <div className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Feature />
                <Client />
                <MapClients />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/HR" element={<HR />} />
          <Route path="/Supply" element={<Supply />} />
          <Route path="/FM" element={<FM />} />
        </Routes>
      </div>

      {/* Footer on ALL pages */}
      <Footer />
    </div>
  );
}

export default App;
