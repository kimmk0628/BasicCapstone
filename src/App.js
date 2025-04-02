import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Chatbot from './pages/Chatbot';
import Quiz from './pages/Quiz';
import DrugSearch from './pages/DrugSearch';
import Setting from './pages/Setting';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/search" element={<DrugSearch />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
