import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Projects from "./pages/projects/Projects";
import AboutMe from "./pages/aboutMe/AboutMe";
import ProjectsDetail from "./pages/projectsDetail/projectsDetails";
import Footer from "./components/footer/Footer";
import Emptystate from "./pages/emptyState/Emptystate";

function App() {

  
  return (
    <>
      <Routes>

        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectsDetail />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="*" element={<Emptystate/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
