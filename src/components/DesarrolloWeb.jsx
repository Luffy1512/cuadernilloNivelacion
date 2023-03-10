import styled from "@emotion/styled"

import comilla from '../img/comilla.svg'

const Section = styled.section`
    background-color: var(--azulOscuro);
    padding: 3rem 0;
    margin-top: 5rem;

    h3 {
        color: #fff;
    }
`
const Contenido = styled.div`
    display: grid;
    gap: 3rem;

    @media (min-width: 768px) {
        gap: 7rem;
        grid-template-columns: repeat(3, 1fr);
    }
`
const FrontBackFull = styled.div`
    div {
        color: #fff;
        position: relative;
        padding: 0 2rem;
        @media (min-width: 768px) {
            padding: 0;
        }
        ::before {
            content: '';
            background-image: url(${comilla});
            position: absolute;
            width: 4rem;
            height: 4rem;
            top: -1rem;
            left: -2rem;

            @media (min-width: 768px) {
                width: 5rem;
                height: 5rem;
                top: -2rem;
                left: -5rem;
            }
        }
    }

    p {
        color: #fff;
        line-height: 2;
        text-align: justify;
    }
`
const Titulo = styled.h5`
    color: var(--amarillo);
    font-weight: 900;
    font-size: 3rem;
    text-transform: uppercase;
    text-align: center;
    line-height: 1;
    margin: 2rem 0;

    span {
        display: block;
        color: #fff;
        text-transform: capitalize;
    }
`
const Video = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: center;
`

const DesarrolloWeb = () => {
  return (
    <Section>
        <div className="contenedor">
            <h3>Segunda Sección: {' '}
            <span>Fundamentos del Desarrollo Web</span></h3>

            <Contenido>
                <FrontBackFull>
                    <Titulo>FrontEnd <span>Developer</span></Titulo>

                    <div>
                        <p>Frontend Developer es la persona encargada de lo que se puede ver en un sitio web, es decir HTML, CSS y JavaScript. Los botones, enlaces, mostrar información, formularios, imágenes. También es la persona encargada de optimizar el sitio, mejora el código CSS para que sea ligero, escribir CSS que se adapte a celulares y tabletas, y que ese código sea compatible.</p>
                        <p>En años recientes el FE Developer también trabaja con JavaScript y tecnologías como React para mostrar información desde una API. Si bien aunque su trabajo parece estar enfocados en el diseño, hay un área llamada UI Design que es la encargada de colores, tipografía y más.</p>
                    </div>
                </FrontBackFull>
                <FrontBackFull>
                    <Titulo>Backend
                        <span>Developer</span>
                    </Titulo>

                    <div>
                        <p>Backend Developer es la persona encargada de escribir el código que se ejecuta del lado del servidor. Si una tienda virtual recibe pagos, lo debe hacer de forma segura. También se encarga de modelar una base de datos, cómo se va a relacionar las diferentes tablas o entidades de información de un proyecto para evitar redundancia.</p>
                        <p>El Backend Developer también se encargara de mejorar el performance del código actual, revisar cuestiones de seguridad, evitar ataques e inyección SQL. En el enfoque Moderno, Backend se encargara de crear un API que FrontEnd va a consumir y mostrar.</p>
                    </div>
                </FrontBackFull>
                <FrontBackFull>
                    <Titulo>FullStack
                        <span>Developer</span>
                    </Titulo>

                    <div>
                        <p>Full Stack significa que puedes crear el Stack Completo de una Aplicación o sitio web; es decir puedes escribir tanto backend como frontend.</p>
                        <p>Full Stack no es la persona que configura servidores, revisa impresoras, arquitectura de software, project manager, eso es un departamento completo de TI.</p>
                    </div>
                </FrontBackFull>
            </Contenido>

            <Video>
                <iframe width="660" height="315" src="https://www.youtube.com/embed/Gdprnr_NXmE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Video>
        </div>
    </Section>
  )
}

export default DesarrolloWeb