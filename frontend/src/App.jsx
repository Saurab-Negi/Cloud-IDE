import './App.css'
import Editor from './pages/Editor/Editor';
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/editor/:roomId" element={<Editor />} />
      </Routes>
    </>
  )
}

export default App
