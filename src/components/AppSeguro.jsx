import Formulario from "./Formulario"
import useCotizador from "../hooks/useCotizador"
import { ClimbingBoxLoader } from "react-spinners";
import Resultado from "./Resultado";

const AppSeguro = () => {

    const { cargando } = useCotizador();

  return (
    <>
          <header className="my-10">
              <h1 className="text-white text-center text-4xl font-black">Cotizador de Seguros</h1>
          </header>
          
          <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
              <Formulario />

              {
                  cargando ? (
                    <div className="flex justify-center items-center mt-4">
                            <ClimbingBoxLoader color="#3730a3" />
                        <p className="uppercase font-black text-black">Cotizando, Espere un momento.</p>
                    </div>
                  ) : (
                    <Resultado />
                  )
              }
          </main>
    </>
  )
}

export default AppSeguro
