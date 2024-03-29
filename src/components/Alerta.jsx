/* eslint-disable react/prop-types */

import useCotizador from "../hooks/useCotizador"

const Alerta = () => {

  const { error } = useCotizador();

  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center uppercase">
          <strong className="font-bold">¡Oh no! {' '}</strong>
          <span className="block sm:inline">{error}</span>
    </div>
  )
}

export default Alerta
