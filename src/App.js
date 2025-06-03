import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Project1 from "./pages/projects/Project1/Project1";
import Project2 from "./pages/projects/Project2/Project2";
import Project3 from "./pages/projects/Project3/Project3";
import Project4 from "./pages/projects/Project4/Project4";
import Project5 from "./pages/projects/Project5/Project5";
import Project6 from "./pages/projects/Project6/Project6";
import Project7 from "./pages/projects/Project7/Project7";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <Projects />
                  {/* Add other sections (About, Services) here */}
                </>
              }
            />
            <Route path="/projects/Project1" element={<Project1 />} />
            <Route path="/projects/Project2" element={<Project2 />} />
            <Route path="/projects/Project3" element={<Project3 />} />
            <Route path="/projects/Project4" element={<Project4 />} />
            <Route path="/projects/Project5" element={<Project5 />} />
            <Route path="/projects/Project6" element={<Project6 />} />
            <Route path="/projects/Project7" element={<Project7 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
