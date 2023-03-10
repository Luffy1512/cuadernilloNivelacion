import styled from "@emotion/styled"
import { useState } from "react"
import Error from "./Error"

import funciones from '../img/funciones.jpg'
import funciones2 from '../img/funciones2.jpg'
import arreglo from '../img/arreglo.jpg'
import objeto from '../img/objeto.jpg'


const Parrafo = styled.p`
    line-height: 2;
    margin-bottom: 2rem;
`

const ContenedorGrid = styled.div`
    display: grid;
    row-gap: 3rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
    }
`

const Div = styled.div`
    background-color: var(--blanco);
    padding: 1.5rem;
    box-shadow: 0 0 10px -3px rgb(0 0 0 / .3);
    border-radius: .5rem;
    border-left: 7px solid var(--primario);
    transition: all .3s ease-in-out;
    
    :hover {
        transform: scale(1.07);
    }
`
const H4 = styled.h4`
    color: var(--primario);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.5rem;

    :hover {
        cursor: pointer;
    }
`
const ParrafoDiv = styled.p`
    line-height: 2;
    margin: 0;
    margin-bottom: 1rem;
`

const Formulario = styled.form`
    background-color: var(--blanco);
    box-shadow: 0 0 10px -3px rgb(0 0 0 / .3);
    padding: 1.5rem;

    input[type="submit"] {
        font-size: 1.5rem;
        border: none;
        background-color: var(--negro);
        color: var(--blanco);
        font-weight: 700;
        text-transform: uppercase;
        padding: .5rem 3rem;
        margin-top: 2rem;
        border-radius: .5rem;
        transition: all .3s ease-in-out;

        :hover {
            cursor: pointer;
            background-color: var(--primario);
        }
    }
`
const Campo = styled.div`
    margin-top: 2rem;
    label {
        text-transform: uppercase;
        color: var(--gris);
        font-weight: 700;
    }
    input {
        border: 1px solid var(--grisClaro);
        padding: .5rem;
    }
`


const Programacion = () => {

    const [texto, setTexto] = useState('')
    const [numero, setNumero] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [mensaje2, setMensaje2] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (texto.startsWith('"') && texto.endsWith('"')) {
            setMensaje('Perfecto!! Sigue As?? :)')
        } else {
            setMensaje('Te Equivocaste! Intenta de Nuevo!')
        }
        setTimeout(() => {
            setMensaje('')
            setTexto('')
        }, 3000);
    }

    const handleSubmitNumber = (e) => {
        e.preventDefault()
        // console.log(numero !== '');
        if (numero !== '' && !isNaN(numero)) {
            // console.log('si');
            setMensaje2('Perfecto!! Sigue As?? :)')
        } else {
            // console.log('no');
            setMensaje2('Te Equivocaste! Intenta de Nuevo!')
        }
        setTimeout(() => {
            setMensaje2('')
            setNumero('')
        }, 3000);
    }

  return (
    <section className="contenedor separacion">
        <h3>Primera Secci??n:{' '}
            <span>Introducci??n a la Programaci??n</span>
        </h3>
        <Parrafo>
            En esta secci??n cubriremos algunos conceptos b??sicos sobre la programaci??n como ser:
        </Parrafo>

        <ContenedorGrid>
            <Div>
                <H4>Tipos de Datos</H4>
                
                <div>
                    <ParrafoDiv>
                        Cada lenguaje tendr?? tipos de datos. De esta forma se pueden ???clasificar??? los valores de una variable seg??n el tipo de dato asociado a ella.
                    </ParrafoDiv>
                    <ParrafoDiv>
                        Ejemplo:
                        <br/> - "Strings o Cadenas de Texto"
                        nombre = ???Luis???
                        <br/> - "Integers o Enteros"
                        likes = 201
                        <br/> - "Floats o Flotantes"
                        total_pagar = 100.20
                        <br/> - "Boolean"
                        pagado = True
                    </ParrafoDiv>
                </div>
            </Div>
            <Div>
                <H4>Variables</H4>

                <div>
                    <ParrafoDiv>- Una variable es un contenedor para un valor.
                    </ParrafoDiv>
                    <ParrafoDiv>- Algunos lenguajes de programaci??n tienen palabras reservadas para crear una variable.
                    </ParrafoDiv>
                    <ParrafoDiv>- Otros lenguajes tienen que especificar un tipo de dato para que sepa que tipo de valor tendr?? esa variable.
                    </ParrafoDiv>
                    <ParrafoDiv>- Existen reglas para nombrar las variables: No pueden iniciar con un nuevo o guion medio. No pueden llevar caracteres especiales. No pueden llevar el nombre de palabras reservadas del lenguaje.
                    </ParrafoDiv>
                </div>
            </Div>
            <Div>
                <H4>Funciones</H4>

                <div>
                    <ParrafoDiv>- Una funci??n es un bloque de c??digo dise??ado para realizar una actividad. Todos los lenguajes de programaci??n tienen una gran cantidad de funciones ya escritas.
                    </ParrafoDiv>
                    <ParrafoDiv>- Algunas veces la funci??n que necesitamos no existe o requerimos algo m??s especifico, entonces deber??s crear tus propias funciones.
                    </ParrafoDiv>
                    <img src={funciones} alt="Imagen funciones" />
                    <br />
                    <img src={funciones2} alt="Imagen funciones" />
                </div>
            </Div>
            <Div>
                <H4>Arreglos y Objetos</H4>

                <div>
                    <ParrafoDiv>- Un arreglo permite agrupar diferente informaci??n en un solo lugar. Usualmente un array puede contener cualquier tipo de dato e incluso datos que no sean muy relacionados entre si. 
                    </ParrafoDiv>
                    <img src={arreglo} alt="Imagen Arreglo" />
                    <ParrafoDiv>- Un objeto es en cierta medida similar a un arreglo, te permite  agrupar contenido de diferentes tipos de datos. Usualmente se accede a un elemento de un array por medio de su ??ndice, en un objeto se accede por medio de una llave (key).
                    </ParrafoDiv>
                    <img src={objeto} alt="Imagen objeto" />
                </div>
            </Div>
        </ContenedorGrid>
        
        <div className="separacion">
            <h4>Ejercicios:</h4>

            <ContenedorGrid>
            
                <Formulario
                    onSubmit={handleSubmit}
                >
                    <p>Almacena en la variable "texto" un dato de tipo String</p>
                    <Campo>
                        <label htmlFor="texto">texto = </label>
                        <input 
                            id="texto"
                            value={texto}
                            onChange={e => setTexto(e.target.value)}
                            type="text"
                        />
                    </Campo>
                    <input 
                        type="submit" 
                        value="Comprobar"
                    />
                    
                    {mensaje.length > 0 && (
                        <Error error={`${mensaje.startsWith('Te') ? 'error' : ''}`}>{mensaje}</Error>
                    )}
                </Formulario>
                <Formulario
                    onSubmit={handleSubmitNumber}
                >
                    <p>Almacena en la variable "numero" un dato de tipo Integer</p>
                    <Campo>
                        <label htmlFor="numero">numero = </label>
                        <input 
                            id="numero"
                            value={numero}
                            onChange={e => setNumero(e.target.value)}
                            type="text"
                        />
                    </Campo>
                    <input 
                        type="submit" 
                        value="Comprobar"
                    />
                    
                    {mensaje2.length > 0 && (
                        <Error error={`${mensaje2.startsWith('Te') ? 'error' : ''}`}>{mensaje2}</Error>
                    )}
                </Formulario>
            </ContenedorGrid>
        </div>
    </section>
  )
}

export default Programacion