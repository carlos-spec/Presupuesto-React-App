import React,{Fragment, useState} from 'react';
import Error from './Error';

function Pregunta(props) {

    const{guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante}= props;

    //creamos el state
    const [cantidad,guardarCantidad]= useState(0);
    const [error,guardarError]= useState(false);
    // validamos el presupuesto
    const agregarPresupuesto= e =>{
        e.preventDefault();
        // validar los datos que se quieran mandar al dar click en el boton azul
        if (cantidad<1|| isNaN(cantidad)) {
            guardarError(true);
            return;
        }
        // si se pasa la validacion
        guardarError(false)
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        guardarPreguntaPresupuesto(false)

    }
    return(
        <Fragment>
        <h2>Coloca Tu Presupuesto</h2>
        {error ? <Error mensaje='el presupuesto es incorrecto'/>: null}
        <form
        onSubmit={agregarPresupuesto}
        > 
            <input 
            type='number'
            className='u-full-width'
            placeholder='Agrega Tu Presupuesto'
            onChange={ e=> guardarCantidad( parseInt(e.target.value,10))}
            />
            <input
            type='submit'
            className='button-primary u-full-width'
            value='Definir Presupuesto'
            />

        </form>
    </Fragment>
    )
}
export default Pregunta;