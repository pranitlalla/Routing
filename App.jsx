import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from './components/Footer'
import Contact from './components/Contact'
import Services from "./components/Services"

import "./style/App.scss"
import "./style/Header.scss"
import "./style/Home.scss"
import "./style/Footer.scss"
import "./style/Contact.scss"
import "./style/Services.scss"

function App() {
 
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path = "/" element = {<Home></Home>}></Route>
        <Route path = "/Contact" element = {<Contact></Contact>}></Route>
        <Route path = "/Services" element = {<Services></Services>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App
