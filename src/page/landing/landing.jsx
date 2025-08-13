import { X, Check } from "lucide-react";
import Banner from "../../assets/img.png";
import Discos from "../../assets/descarga.png";

export const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-[#121212] to-[#121212]  relative">
    <div className=" bg-gradient-to-b from-pink-200 via-[#121212] to-[#121212] relative"></div>

      {/* Blue notification bar */}
      <div className="bg-blue-500 text-white text-center py-2 px-4 text-sm relative">
        <span className="underline cursor-pointer">Colombia (English)</span>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <X size={16} />
        </button>
      </div>

      {/* Header */}
      <header className="bg-black text-white px-6 py-4 relative z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 ">
            <img src="https://www.spotify.com/co-es/" alt="" />
            <span className="text-xl font-bold">Spotify</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Premium
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Ayuda
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Descargar
            </a>
            <div className="h-6 w-px bg-gray-600"></div>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Registrarse
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Iniciar sesión
            </a>
          </nav>
        </div>
      </header>

      <div className="lg:block w-full absolute right-0 top-7 ">
          <img src={Discos} alt="" className="w-[50%] absolute right-0 top-0 bottom-12"/>
      </div>
      {/* Main Content */}
      <main className="relative mb-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold leading-tight">
                  Escucha sin límites. Prueba 1 mes de Premium Individual por $ 0.
                </h1>
                <p>Después, solo cuesta $ 18.500 por mes. Cancela cuando quieras.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="bg-[#FFD2D7] hover:bg-[#FFD2D7] text-black px-8 py-3 rounded-full text-base font-bold"
                >
                  Empezar
                </button>
                <button
                  className="border border-gray-500 text-white bg-black px-8 py-3 rounded-full text-base font-bold"
                >
                  Ver todos los planes
                </button>
              </div>

              <div className="text-xs text-white max-w-md">
                $ 0 por 1 mes. Después, cuesta $ 18.500 al mes. La oferta solo está disponible si aún no probaste Premium.{" "}
                <a href="#" className="underline hover:text-white">
                  Se aplican Términos.
                </a>

              </div>
            </div>

            {/* Right Content - Album Grid */}
          </div>

        </div>
          {/* Banner */}
          <div className="flex items-center justify-center py-10">
            <img src={Banner} alt="Banner" className="max-w-full h-auto" />
          </div>

        {/* Spotify Logo Circle at Bottom */}
        {/* <div className="absolute bottom-[40%] right-8">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-green-500 rounded-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </main>

      {/* Additional Sections */}
      <div className="max-w-7xl mx-auto  px-6 py-20 space-y-20">
        {/* Transferir */}
        <div className="grid justify-items-center text-center space-y-6">
          <h1 className="text-5xl font-bold text-white">Transferir a Spotify</h1>
          <p className="text-white text-2xl w-[50%] font-semibold">
              Transfiere tu música fácilmente desde cualquier servicio de música. Luego, toma el control total de tu música con Spotify Premium.
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <button className="bg-[#FFD2D7] hover:bg-[#FFD2D7] text-black px-8 py-3 rounded-full text-base font-bold">Obtener Premium Individual</button>
            <button className="border border-gray-500 text-white  px-8 py-3 rounded-full text-base font-bold">¿Cómo hago la transferencia?</button>
          </div>
        </div>

        {/* Nota la diferencia */}
        <div>
          <div className="text-white text-center py-4">
            <h2 className="text-4xl font-bold">Nota la diferencia</h2>
            <p className="text-base">Cámbiate a Premium y disfruta del control total de tu música. Cancela cuando quieras.</p>
          </div>
          <div className="text-white flex items-center justify-center p-4">
            <div className="w-full max-w-xl">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left border-b border-gray-300">
                    <th className="p-3">Beneficios</th>
                    <th className="p-3">Servicio gratuito de Spotify</th>
                    <th className="p-3 flex items-center gap-2">
                      Planes Premium de Spotify
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="p-3 underline py-6 text-start">Escucha música sin anuncios</td>
                    <td className="p-3 text-center">—</td>
                    <td className="p-3 text-center grid place-items-center">
                      <div className="bg-white w-8 h-8 justify-center items-center text-center flex rounded-full">
                        <Check className="text-black" />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="p-3 underline py-6 text-start">Descarga contenido para escuchar en modo offline</td>
                    <td className="p-3 text-center">—</td>
                    <td className="p-3 text-center grid place-items-center">
                      <div className="bg-white w-8 h-8 justify-center items-center text-center flex rounded-full">
                        <Check className="text-black" />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="p-3 underline py-6 text-start">Reproduce canciones en el orden que quieras</td>
                    <td className="p-3 text-center">—</td>
                    <td className="p-3 text-center grid place-items-center">
                      <div className="bg-white w-8 h-8 justify-center items-center text-center flex rounded-full">
                        <Check className="text-black" />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="p-3 underline py-6 text-start">Disfruta de audio de alta calidad</td>
                    <td className="p-3 text-center">—</td>
                    <td className="p-3 text-center grid place-items-center">
                      <div className="bg-white w-8 h-8 justify-center items-center text-center flex rounded-full">
                        <Check className="text-black" />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="p-3 underline py-6 text-start">Escucha contenido con tus personas favoritas en tiempo real</td>
                    <td className="p-3 text-center">—</td>
                    <td className="p-3 text-center grid place-items-center">
                      <div className="bg-white w-8 h-8 justify-center items-center text-center flex rounded-full">
                        <Check className="text-black" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 underline py-6 text-start">Organiza la fila de reproducción</td>
                    <td className="p-3 text-center">—</td>
                    <td className="p-3 text-center grid place-items-center">
                      <div className="bg-white w-8 h-8 justify-center items-center text-center flex rounded-full">
                        <Check className="text-black" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      <div className=" text-white py-12 px-4">
        <h2 className="text-center text-3xl font-bold mb-2">
          Planes accesibles para cada situación
        </h2>
        <p className="text-center text-sm text-gray-300 max-w-xl mx-auto">
          Elige un plan Premium y escucha música sin anuncios y sin interrupciones en tu teléfono, altavoz y otros dispositivos. 
          Accede a varias formas de pago. Cancela cuando quieras.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Card */}
          <div className="bg-neutral-900 rounded-lg p-6 flex flex-col justify-between border border-neutral-800">
            <div>
              <span className="text-xs text-gray-400">Premium</span>
              <h3 className="text-xl font-bold mt-1">Individual</h3>
              <p className="text-lg font-semibold mt-1">$18.500 al mes</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>1 cuenta Premium</li>
                <li>Cancela cuando quieras</li>
                <li>Suscripción o un pago único</li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full bg-pink-200 text-black font-semibold py-2 rounded-full hover:bg-pink-300">
                Obtener Premium Individual
              </button>
              <button className="w-full border border-gray-400 text-white py-2 rounded-full mt-2 hover:bg-neutral-800">
                Un pago único
              </button>
            </div>
          </div>

          {/* Card */}
          <div className="bg-neutral-900 rounded-lg p-6 flex flex-col justify-between border border-neutral-800">
            <div>
              <span className="text-xs text-gray-400">Premium</span>
              <h3 className="text-xl font-bold mt-1">Lite</h3>
              <p className="text-lg font-semibold mt-1">$14.000 al mes</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>1 cuenta Premium por dispositivo móvil</li>
                <li>Reproducción en modo offline en 1 dispositivo</li>
                <li>Audio de calidad básica</li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full bg-green-200 text-black font-semibold py-2 rounded-full hover:bg-green-300">
                Obtener Premium Lite
              </button>
              <button className="w-full border border-gray-400 text-white py-2 rounded-full mt-2 hover:bg-neutral-800">
                Un pago único
              </button>
            </div>
          </div>

          {/* Card */}
          <div className="bg-neutral-900 rounded-lg p-6 flex flex-col justify-between border border-neutral-800">
            <div>
              <span className="text-xs text-gray-400">Premium</span>
              <h3 className="text-xl font-bold mt-1">Estudiantes</h3>
              <p className="text-lg font-semibold mt-1">$10.100 al mes</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>1 cuenta Premium verificada</li>
                <li>Descuento para estudiantes elegibles</li>
                <li>Cancela cuando quieras</li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full bg-purple-300 text-black font-semibold py-2 rounded-full hover:bg-purple-400">
                Obtener Premium para Estudiantes
              </button>
              <button className="w-full border border-gray-400 text-white py-2 rounded-full mt-2 hover:bg-neutral-800">
                Un pago único
              </button>
            </div>
          </div>

          {/* Card */}
          <div className="bg-neutral-900 rounded-lg p-6 flex flex-col justify-between border border-neutral-800">
            <div>
              <span className="text-xs text-gray-400">Premium</span>
              <h3 className="text-xl font-bold mt-1">Duo</h3>
              <p className="text-lg font-semibold mt-1">$26.500 al mes</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>2 cuentas Premium</li>
                <li>Cancela cuando quieras</li>
                <li>Suscripción o un pago único</li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full bg-yellow-300 text-black font-semibold py-2 rounded-full hover:bg-yellow-400">
                Obtener Premium Duo
              </button>
              <button className="w-full border border-gray-400 text-white py-2 rounded-full mt-2 hover:bg-neutral-800">
                Un pago único
              </button>
            </div>
          </div>

          {/* Card */}
          <div className="bg-neutral-900 rounded-lg p-6 flex flex-col justify-between border border-neutral-800">
            <div>
              <span className="text-xs text-gray-400">Premium</span>
              <h3 className="text-xl font-bold mt-1">Familiar</h3>
              <p className="text-lg font-semibold mt-1">$40.000 al mes</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>Hasta 6 cuentas Premium</li>
                <li>Control de contenido explícito</li>
                <li>Cancela cuando quieras</li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full bg-blue-200 text-black font-semibold py-2 rounded-full hover:bg-blue-300">
                Obtener Premium Familiar
              </button>
              <button className="w-full border border-gray-400 text-white py-2 rounded-full mt-2 hover:bg-neutral-800">
                Un pago único
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};