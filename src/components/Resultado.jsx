
import { useCallback, useRef } from 'react';

import useCotizador from '../hooks/useCotizador'
import { marcas, planes } from '../constants';

const Resultado = () => {

    const { resultado, datos } = useCotizador();
    const { marca, year, plan } = datos;
    const yearReft = useRef(year);

    const [marcaSelect] = useCallback(
            marcas.filter((marcaState) => marcaState.id === Number(marca)),
        [resultado] // ! Hasta que no cambie el resultado no se vuelve a ejecutar el callback y no actualiza la marca
    );

    const [planSelect] = useCallback(
            planes.filter((planState) => planState.id === Number(plan)),
        [resultado]
    );

    // Como seria un useMemo
    /**
        const [marcaSelect] = useMemo(() => // * Es con un arrow function
                marcas.filter((marcaState) => marcaState.id === Number(marca)),
            [resultado]
        );
    */

    if(resultado === 0) return null;

  return (
    <div className='bg-gray-100 text-center p-5 mt-5 shadow'>
          <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>
          <p className='mt-2'><span className='font-bold'>Marca:</span> {marcaSelect.nombre}</p>
          <p className='mt-2'><span className='font-bold'>Plan:</span> {planSelect.nombre}</p>
          <p className='mt-2'><span className='font-bold'>Año:</span> {yearReft.current}</p>
            <p className='mt-2 text-2xl'><span className='font-bold'>Total:</span> {resultado}</p>
    </div>
  )
}

export default Resultado
