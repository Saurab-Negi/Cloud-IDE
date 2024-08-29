import './App.css'
import Editor from './pages/Editor/Editor';
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
    <Toaster position='top-center' />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/editor/:roomId" element={<Editor />} />
      </Routes>
    </>
  )
}

export default App
