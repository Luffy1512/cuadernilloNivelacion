import styled from "@emotion/styled"

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

    const salirModal = () => {
        setModal(false)
    }

  return (
    <Overley
        onClick={salirModal}
    >
        <ModalImagen>
            <img src={imagen} alt="Imagen Modal" />
        </ModalImagen>
    </Overley>
  )
}

export default Modal