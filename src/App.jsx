import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Components/about/About'
import Contact from './Components/contact/Contact'
import Explore from './Components/Explore/Explore'
import PackageDetails from './Components/Explore/PackageDetails'
import Footer from './Components/footer/Footer'
import Home from './Components/home/Home'
import Navbar from './Components/navbar/Navbar'
import TopDestinationDetails from './Components/topDestinations/TopDestinationDetails'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/Travel-Website-ReactJS' element={ <Home /> } />
      <Route path='/explore' element={ <Explore /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/contact' element={ <Contact /> } />
      <Route path='/TopDestinationDetails/:id' element={<TopDestinationDetails /> } />
      <Route path='/PackageDetails/:id' element={ <PackageDetails /> } />
    </Routes>
    <Footer />
    </BrowserRouter>
    
    </>
  )
}

export default App
