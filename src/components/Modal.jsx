import styled from "@emotion/styled"
import {mostrarImagen} from '../helpers'


const Overley = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0 0 0 / .7);
`
const ModalImagen = styled.div`
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    display: grid;
    justify-content: center;
    align-items: center;
`

const Modal = ({setModal, imagen}) => {

    // console.log(imagen);
    const img = mostrarImagen(imagen)

    const salirModal = () => {
        setModal(false)
    }

  return (
    <Overley
        onClick={salirModal}
    >
        <ModalImagen>
            <img src={img} alt="Imagen Modal" />
        </ModalImagen>
    </Overley>
  )
}

export default Modal