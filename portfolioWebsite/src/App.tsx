import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Projects from "./pages/projects/Projects";
import AboutMe from "./pages/aboutMe/AboutMe";
import ProjectsDetail from "./pages/projectsDetail/projectsDetails";
import Footer from "./components/footer/Footer";
import Emptystate from "./pages/emptyState/Emptystate";
import { useEffect, useState } from "react";

function App() {
// 1. Estado do tema (inicia em 'light' ou lê do localStorage)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "light";
  });
  
  // 2. Atualiza o atributo no HTML e guarda a preferência do utilizador
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // 3. Função para alternar entre os temas
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <>
      <Routes>
        {/* Rota principal / que carrega a Homepage */}
        <Route 
          path="/" 
          element={<Homepage theme={theme} onToggleTheme={toggleTheme} />} 
        />
        
        {/* Mantém /homepage a redirecionar ou a carregar a Homepage */}
        <Route 
          path="/homepage" 
          element={<Navigate to="/" replace />} 
        />

        <Route 
          path="/projects" 
          element={<Projects theme={theme} onToggleTheme={toggleTheme} />} 
        />
        <Route 
          path="/project/:id" 
          element={<ProjectsDetail theme={theme} onToggleTheme={toggleTheme} />} 
        />
        <Route 
          path="/aboutme" 
          element={<AboutMe theme={theme} onToggleTheme={toggleTheme} />} 
        />
        <Route 
          path="*" 
          element={<Emptystate theme={theme} onToggleTheme={toggleTheme}/>} 
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
