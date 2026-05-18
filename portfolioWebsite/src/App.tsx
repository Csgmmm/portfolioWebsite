import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Projects from "./pages/projects/Projects";
import AboutMe from "./pages/aboutMe/AboutMe";
import ProjectsDetail from "./pages/projectsDetail/projectsDetails";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectsDetail />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
