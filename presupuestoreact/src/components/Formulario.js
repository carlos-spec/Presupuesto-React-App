import React,{useState} from 'react';
import Error from './Error'
import shortid from 'shortid';


function Formulario(props) {
    const {guardarGasto, guardarCrearGasto}= props;
    const[nombreGasto,guardarNombreGasto]=useState('');
    const[cantidadGasto,GuardarCantidadGasto]=useState(0);
    const[error,guardarError]=useState(false)

    const agregarGasto= e =>{
        e.preventDefault();
        // validar los datos que se quieran mandar al dar click en el boton azul
        if (cantidadGasto<1|| isNaN(cantidadGasto) ||nombreGasto==='')  {
            guardarError(true);
            return;
        }

        
        // construir el objeto de gasto 
        const gasto={
            nombreGasto,
            cantidadGasto,
            id:shortid.generate()
        }
         // pasar el gasto al componente principal
         //eliminar alerta
         guardarError(false);
        guardarGasto(gasto);
        guardarCrearGasto(true)

        // resetear el form
        guardarNombreGasto('')
        GuardarCantidadGasto('')
    }
    return(
        
        <form
        onSubmit={agregarGasto}
        >
            <h2>Agrega Tus Gastos Aqui</h2>
            {error ? <Error mensaje='Ambos campos son obligatorios'/>: null}
            <div className='campo'>
                <label>Nombre Gasto</label>
                <input
                type='text'
                className='u-full-width'
                placeholder='ej. Transporte'
                onChange={e=> guardarNombreGasto(e.target.value)}
                value={nombreGasto}
                />
            </div>

            <div className='campo'>
                <label>Cantidad Gasto</label>
                <input
                type='number'
                className='u-full-width'
                placeholder='ej. 300'
                onChange={e=> GuardarCantidadGasto(parseInt(e.target.value) )}
                value={cantidadGasto}
                />
            </div>
            <input
            type='submit'
            className='button-primary u-full-width'
            value='Agregar Gastos'
            />
        </form>
    )
}

export default Formulario;