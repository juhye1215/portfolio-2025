import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './component/Nav'; // Your navigation component
import Home from './pages/Home';   // Home page component
import Project from "./pages/Project";  // Project page component

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<Project />} />
    </Routes>

  );
}

export default App;
