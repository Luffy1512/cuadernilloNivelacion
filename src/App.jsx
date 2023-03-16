import { useState } from "react"
import DesarrolloWeb from "./components/DesarrolloWeb"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Herramientas from "./components/Herramientas"
import Modal from "./components/Modal"
import Programacion from "./components/Programacion"


function App() {

  const [modal, setModal] = useState(false)
  const [imagen, setImagen] = useState('')

  return (
    <>
      <Header />
      <main>
        <Programacion />
        <DesarrolloWeb />
        <Herramientas 
          setImagen={setImagen}
          setModal={setModal}
        />
        {modal && <Modal setModal={setModal} imagen={imagen} />}
      </main>

      <Footer />
    </>
  )
}

export default App
