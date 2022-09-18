import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoppingList from './app/views/ShoppingList';
import NotFound from './app/views/NotFound';
import Nav from './app/components/Nav/Nav';
import Home from './app/views/Home';
import Films from './app/views/Films';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shopping-list' element={<ShoppingList />} />
        <Route path='/films' element={<Films />} />
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
