import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CollectionsPage from './components/CollectionsPage';
import ProductsPage from './components/ProductsPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<CollectionsPage/>} />
        <Route path="/products" element={<ProductsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
