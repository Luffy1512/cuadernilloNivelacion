import styled from "@emotion/styled"
import { Typewriter } from 'react-simple-typewriter'

import ies_lacocha from '../img/ies_lacocha.jpg'
import youtube from '../img/youtube.svg'
import facebook from '../img/facebook.svg'
import twitter from '../img/twitter.svg'
import instagram from '../img/instagram.svg'
import header from '../img/header.png'

const Encabezado = styled.header`
    background-color: #2b3b45;
    padding: 4rem 0;
`
const Div = styled.div`
    max-width: 140rem;
    display: grid;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 3fr 1fr;
        column-gap: 2rem;
        align-items: center;
    }
`
const H1 = styled.h1`
    color: var(--blanco);
    text-transform: uppercase;
    text-align: center;
    font-weight: 900;
    font-size: 3rem;

    @media (min-width: 768px) {
        font-size: 3.5rem;
    }
`
const SpanH1 = styled.span`
    display: block;
`
const RedesSociales = styled.nav`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
`

const Section = styled.section`
    background-color: #2e85aa;
    padding: 3rem 0;
`
const H2 = styled.h2`
  font-size: 3rem;
  color: var(--blanco);
  text-transform: uppercase;
  font-weight: 900;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`
const Span = styled.span`
    display: block;
`
const Parrafo = styled.p`
    color: var(--blanco);
    font-size: 1.8rem;

    @media (min-width: 768px) {
        font-size: 2.2rem;
    }
`
const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`
const Imagen = styled.div`
    max-width: 30rem;
    margin: 0 auto;

    @media (min-width: 768px) {
        margin: 0;
    }
`


const Header = () => {

  return (
    <>
        <Encabezado>
            <Div className="contenedor">
                <div>
                    <img src={ies_lacocha} alt="Imagen Institución" />
                </div>
                <H1>Instituto de Enseñanza Superior <SpanH1>La Cocha</SpanH1></H1>
                <RedesSociales>
                    <a href="http:\\www.facebook.com">
                        <img src={facebook} alt="Imagen facebook" />
                    </a>
                    <a href="http:\\www.twitter.com">
                        <img src={twitter} alt="Imagen twitter" />
                    </a>
                    <a href="http:\\www.youtube.com">
                        <img src={youtube} alt="Imagen youtube" />
                    </a>
                    <a href="http:\\www.instagram.com">
                        <img src={instagram} alt="Imagen instagram" />
                    </a>
                </RedesSociales>
            </Div>
        </Encabezado>
        <Section>
            <Contenedor className="contenedor">
                <div>
                    <H2>
                        Carrera: {' '}
                        <Span>
                            <Typewriter 
                                words={['Tecnicatura Superior en', 'Desarrollo de Software']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={120}
                                deleteSpeed={80}
                            />
                        </Span>
                    </H2>
                    <Parrafo>Bienvenidos al Mundo del Desarrollo de Software</Parrafo>
                </div>
                <Imagen>
                    <img src={header} alt="Imagen header" />
                </Imagen>
            </Contenedor>
        </Section>
        
    </>
  )
}

export default Header