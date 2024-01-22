import { Fragment,  } from "react"
import { marcas, planes, years } from "../constants"
import useCotizador from "../hooks/useCotizador"
import Alerta from "./Alerta";

const Formulario = () => {

    const { handleChangeDatos, datos, error, setError, cotizarSeguro } = useCotizador();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(datos).includes('')) {
            setError('Todos los campos son obligatorios');
            return;
        }
        
        setError('');

        cotizarSeguro();
    }

  return (
      <>
          {
              error && (
                  <Alerta />
              )
          }
          <form onSubmit={handleSubmit}>
              <div className="my-5">
                  <label className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
                    <select className="w-full p-3 border border-gray-200" name="marca" onChange={e => handleChangeDatos(e)} value={datos.marca}>
                        <option value="">-- Seleccione --</option>
                        {
                          marcas.map((marca) => (
                              <option
                                  key={marca.id}
                                  value={marca.id}
                              >
                                  {marca.nombre}
                              </option>
                          ))
                        }
                    </select>
            </div>
              <div className="my-5">
                  <label className="block mb-3 font-bold text-gray-400 uppercase">Año</label>
                    <select className="w-full p-3 border border-gray-200" name="year" onChange={e => handleChangeDatos(e)} value={datos.year}>
                        <option value="">-- Seleccione Año --</option>
                        {
                          years.map((year) => (
                              <option
                                  key={year}
                                  value={year}
                              >
                                  {year}
                              </option>
                          ))
                        }
                    </select>
            </div>
              <div className="my-5">
                  <label className="block mb-3 font-bold text-gray-400 uppercase">Elige Un Plan</label>
                  <div className="flex gap-3 items-center">
                      {
                          planes.map(plan => (
                              <Fragment key={plan.id}>
                                  <label>{plan.nombre}</label>
                                    <input
                                        className="mr-2"
                                        type="radio"
                                        name="plan"
                                      onChange={e => handleChangeDatos(e)}  
                                      value={plan.id}
                                    />
                              </Fragment>
                          ))
                      }
                    </div>
              </div>
              
              <input type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold" value="Cotizar" />
        </form>  
    </>
  )
}

export default Formulario
