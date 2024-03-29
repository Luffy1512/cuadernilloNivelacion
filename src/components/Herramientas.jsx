import styled from "@emotion/styled"

import visual from '../../src/img/visual.jpg'
import sublime from '../../src/img/sublime.jpg'
import notepad from '../../src/img/notepad.jpg'

import netbeans from '../../src/img/netbeans.jpg'
import webstorm from '../../src/img/webstorm.jpg'


const Tres_columnas = styled.div`
    margin-top: 3rem;
    display: grid;
    gap: 3rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`
const Dos_columnas = styled.div`
    margin-top: 3rem;
    display: grid;
    gap: 3rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`
const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Link = styled.a`
    display: inline-block;
    width: 100%;
    background-color: var(--primario);
    transition: all .3s ease-in-out;
    padding: .5rem 3rem;
    border-radius: .5rem;

    text-align: center;
    text-transform: uppercase;
    color: var(--blanco);
    font-weight: 700;

    :hover {
        cursor: pointer;
        background-color: var(--secundario);
    }
    @media (min-width: 768px) {
        display: inline;
    }
`

const Herramientas = ({setImagen, setModal}) => {

    const EDITORES = [
        {
            id: 1,
            name: 'visual',
            imgSrc: visual,
            url: 'https://code.visualstudio.com/'
        },
        {
            id: 2,
            name: 'sublime',
            imgSrc: sublime,
            url: 'https://www.sublimetext.com/'
        },
        {
            id: 3,
            name: 'notepad',
            imgSrc: notepad,
            url: 'https://notepad-plus-plus.org/downloads/'
        }
    ]

    const IDES = [
        {
            id: 1,
            name: 'netbeans',
            imgSrc: netbeans,
            url: 'https://netbeans.apache.org/'
        },
        {
            id: 2,
            name: 'webstorm',
            imgSrc: webstorm,
            url: 'https://www.jetbrains.com/webstorm/download/download-thanks.html'
        },
    ]

    const handleClick = (imgSrc) => {
        // console.log(e.target.alt);
        // setImagen(e.target.alt)
        setImagen(imgSrc)
        setModal(true)
    }    

  return (
    <section className="contenedor separacion">
        <h3>Tercera Sección: {' '}
            <span>Herramientas Necesarias</span>
        </h3>

        <div>
            <h4>¿Qué es un Editor de Texto?</h4>

            <p>Es un programa ligero que no exige mucha RAM o procesador, en dónde puedes abrir y crear un archivo a la vez y guardarlo en una carpeta, ¡pero ojo!, el hecho de que sean programas ligeros no quiere decir que sean limitados. A un editor puedes agregarle plugins para realizar muchas más funciones (por ejemplo que pueda soportar múltiples lenguajes) y hacerlo más potente.</p>

            <Tres_columnas>
               
               {EDITORES.map( editor => (
                    <Contenedor key={editor.id}>
                        <img 
                            onClick={ () => handleClick(editor.imgSrc)}
                            src={editor.imgSrc} 
                            alt={editor.name} 
                        />
                        <Link href={editor.url}>Link</Link>
                    </Contenedor>
               ))}
            </Tres_columnas>
            
        </div>

        <div>
            <h4>¿Qué es un IDE (Integrated Development Environment)?</h4>

            <p>Un ambiente de desarrollo integrado, a diferencia de un editor, es un programa más pesado que pide mucha más memoria RAM y un procesador más poderoso, además de que es un espacio para trabajar proyectos completos no solo en archivos. Contienen herramientas integradas, es decir, ahora ya no crearás carpetas por tu cuenta, pueden tener un compilador (para los lenguajes compilados), un emulador, control de versiones y terminales.</p>

            <Dos_columnas>
                {IDES.map( ide => (
                    <Contenedor key={ide.id}>
                        <img 
                            onClick={ () => handleClick(ide.imgSrc)}
                            src={ide.imgSrc} 
                            alt={ide.name}
                        />
                        <Link href={ide.url}>Link</Link>
                    </Contenedor>
               ))}
            </Dos_columnas>
            
        </div>
    </section>
  )
}

export default Herramientas