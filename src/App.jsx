import AboutMe from "./components/AboutMe.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import MyClasses from "./components/MyClasses.jsx"
import NavBar from "./components/Navbar.jsx"
import Presentation from "./components/Presentation.jsx"

function App() {
  return (
    <>
      <NavBar />
      <Presentation />
      <AboutMe />
      <MyClasses />
      <Contact />
      <Footer />
    </>
  )
}

export default App
