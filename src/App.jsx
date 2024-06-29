import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainapp from './pages/home/mainapp';
import Footer from './pages/home/footer';
import Navbar from './pages/home/navbar';

function App() {

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Mainapp/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
