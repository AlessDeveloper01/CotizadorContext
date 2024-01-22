/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers';

const CotizadorContext = createContext();
const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const handleChangeDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const [error, setError] = useState('');
    const [resultado, setResultado] = useState(0);
    const [cargando, setCargando] = useState(false);

    const cotizarSeguro = () => {
        let resultado = 2000;

        const diferencia = obtenerDiferenciaYear(datos.year);
        resultado -= ((diferencia * 3) * resultado) / 100;
        
        // Americano 15%
        // Asiatico 5%
        // Europeo 30%
        resultado *= calcularMarca(datos.marca);
        resultado *= calcularPlan(datos.plan);
        resultado = formatearDinero(resultado);
        
        setCargando(true);

        setTimeout(() => {
            setCargando(false);
            setResultado(resultado);
        }, 3000);

    }

    return (
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}


export {
    CotizadorProvider
}

export default CotizadorContext