import React from 'react'
import Bottomnav from './components/bottomnav/Bottomnav'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Topnav from './components/topnav/Topnav'

const App = () => {
  return (
<>
<Topnav/>
<Home/>
<Contact/>
<Bottomnav/>
<Footer/>
</>
  )
}

export default App
