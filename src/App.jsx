import DesarrolloWeb from "./components/DesarrolloWeb"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Programacion from "./components/Programacion"


function App() {

  return (
    <>
      <Header />
      <main>
        <Programacion />
        <DesarrolloWeb />
      </main>

      <Footer />
    </>
  )
}

export default App
