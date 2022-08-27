import {Link, Routes, Route} from 'react-router-dom'
import './App.css';
import './pages/About.css'
import About from './pages/About';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <>
    <div className="App">
      <h1 className='brand'><span>S</span>pace Sites</h1>

      <nav className='nav'> 
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="/About" className='nav-item'>About</Link>
        <Link to="/blog" className='nav-item'>Blog</Link>
      </nav>
      
      <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="about" element={<About/>} /> 
          <Route path="blog" element={<Blog/>} /> 
          <Route path="blog/:id" element={<BlogDetail/>} /> 
      </Routes>
    </div>
    </>
  );
}

export default App;
