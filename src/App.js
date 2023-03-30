import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import RecipeSummary from "./components/RecipeSummary";

function App() {
  //TODO 1: npm i react-router react-router-dom
  //TODO 2: Add React Router imports
  //TODO 3: Establish Routes to different pages/components
  //TODO 4: Test routes in browser
  return (
    <div className="bg-[url(./assets/background-image.jpg)] bg-cover bg-center h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
