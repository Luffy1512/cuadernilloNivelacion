import styled from "@emotion/styled"
import map from '../img/map.svg'
import phone from '../img/phone.svg'

const PieDePagina = styled.footer`
    background-color: #202020;
    padding: 3rem 0;
`
const FooterP = styled.p`
    color: #fff;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin: 2rem 0 0 0;

    @media (min-width: 768px) {
        font-size: 2rem;  
        margin: 0;  
    }
`
const Contenedor = styled.div`
    text-align: center;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;  
    }
`
const DivContenido = styled.div`
    font-size: 1.5rem;
    display: flex;
    gap: 3rem;
    align-items: center;
    :first-of-type{
        margin-bottom: 1.5rem;
    }
    a {
        color: #fff;
    }
`

const Footer = () => {
  return (
    <PieDePagina>
        <Contenedor className="contenedor">
            <div>
                <DivContenido>
                    <img src={map} alt="imagen map" />
                    <a href="https://www.google.com/maps/place/Escuela+de+Comercio+Ciudad+Alberdi/@-27.5939077,-65.6244395,17.81z/data=!4m15!1m8!3m7!1s0x9423e8f8a919f285:0x6a288b3278283280!2sC.+Saavedra,+Juan+Bautista+Alberdi,+Tucum%C3%A1n!3b1!8m2!3d-27.582544!4d-65.6248892!16s%2Fg%2F11dx991s0l!3m5!1s0x9423e8e346af2b69:0xb662ab9323c80d19!8m2!3d-27.5941968!4d-65.6231642!16s%2Fg%2F11f03szfdr">
                        Calle J B Teran 200
                    </a>
                </DivContenido>
                <DivContenido>
                    <img src={phone} alt="imagen telefono" />
                    <a href="tel:3865627955">3865 - 627955</a>
                </DivContenido>
            </div>
            <FooterP>&copy; Todos los Derechos Reservados {new Date().getFullYear()}</FooterP>
        </Contenedor>
    </PieDePagina>
  )
}

export default Footer