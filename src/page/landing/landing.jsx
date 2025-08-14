import { X, Check } from "lucide-react";
import { Link } from "react-router";
import Banner from "../../assets/img.png";
import Discos from "../../assets/descarga.png";

export const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] via-[#121212] to-[#121212]  relative">

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
            <span className="text-xl font-bold flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
              </svg>
              Spotify
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/soporte" className="hover:text-gray-300 transition-colors">
              Premium
            </Link>
            <Link to="/soporte" className="hover:text-gray-300 transition-colors">
              Ayuda
            </Link>
            <Link to="/soporte" className="hover:text-gray-300 transition-colors">
              Descargar
            </Link>
            <div className="h-6 w-px bg-gray-600"></div>
            <Link to="/soporte" className="hover:text-gray-300 transition-colors">
              Registrarse
            </Link>
            <Link to="/accounts" className="hover:text-gray-300 transition-colors">
              Iniciar sesión
            </Link>
          </nav>
        </div>
      </header>
    <div className=" bg-gradient-to-b from-[#9c8285] via-[#121212] h-40 to-[#121212] relative text-transparent"> dfsfsd</div>


      <div className="lg:block w-full absolute right-0 top-7 ">
          <img src={Discos} alt="" className="w-[50%] absolute right-0 top-0 bottom-12"/>
      </div>
      {/* Main Content */}
      <main className="relative mb-">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white relative bottom-20 space-y-8">
              <div className="space-y-4 ">
                <h1 className="text-5xl font-bold leading-tight">
                  Escucha sin límites. Prueba 1 mes de Premium Individual por $ 0.
                </h1>
                <p>Después, solo cuesta $ 18.500 por mes. Cancela cuando quieras.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/accounts" className="w-full sm:w-auto">
                  <button
                    className="bg-[#FFD2D7] hover:bg-[#FFD2D7] text-black px-8 py-3 rounded-full text-base font-bold"
                    >
                    Empezar
                  </button>
                </Link>
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
          <div className="flex items-center justify-center relative bottom- py-10">
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
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-center items-center gap-6 max-w-6xl mx-auto">
          {/* Card */}
          <div className="bg-neutral-900 rounded-lg p-6 flex flex-col justify-between border border-neutral-800 bg-neutral-800">
            <div>
              <span className="text-sm flex gap-2 text-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
                  </svg>
                  Premium
                </span>
              <h3 className="text-3xl font-semibold font-bold mt-1 text-pink-200">Individual</h3>
              <p className="text-lg font-semibold mt-1">$18.500 al mes</p>
              <hr className="my-3 bg-neutral-500 h-[0.7px] border-none" />
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>1 cuenta Premium</li>
                <li>Cancela cuando quieras</li>
                <li>Suscripción o un pago único</li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full bg-pink-200 text-black font-bold py-3 rounded-full hover:bg-pink-300">
                Obtener Premium Individual
              </button>
              <button className="w-full border border-gray-400 text-white py-3 rounded-full font-bold mt-2 hover:bg-neutral-800">
                Un pago único
              </button>
            </div>
          </div>

          {/* Card */}
          <div className="bg-neutral-900 rounded-lg p-6 flex flex-col justify-between border border-neutral-800 bg-neutral-800">
            <div>
              <span className="text-sm flex gap-2 text-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
                  </svg>
                  Premium
                </span>
              <h3 className="text-3xl font-semibold font-bold mt-1 text-green-200">Lite</h3>
              <p className="text-lg font-semibold mt-1">$14.000 al mes</p>
              <hr className="my-3 bg-neutral-500 h-[0.7px] border-none" />

              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>1 cuenta Premium por dispositivo móvil</li>
                <li>Reproducción en modo offline en 1 dispositivo</li>
                <li>Audio de calidad básica</li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full bg-green-200 text-black font-bold py-3 rounded-full hover:bg-green-300">
                Obtener Premium Lite
              </button>
              <button className="w-full border border-gray-400 text-white py-3 rounded-full font-bold mt-2 hover:bg-neutral-800">
                Un pago único
              </button>
            </div>
          </div>

          {/* Card */}
          <div className="bg-neutral-900 rounded-lg p-6 flex flex-col justify-between border border-neutral-800 bg-neutral-800">
            <div>
              <span className="text-sm flex gap-2 text-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
                  </svg>
                  Premium
                </span>
              <h3 className="text-3xl font-semibold font-bold mt-1 text-purple-200">Estudiantes</h3>
              <p className="text-lg font-semibold mt-1">$10.100 al mes</p>
              <hr className="my-3 bg-neutral-500 h-[0.7px] border-none" />

              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>1 cuenta Premium verificada</li>
                <li>Descuento para estudiantes elegibles</li>
                <li>Cancela cuando quieras</li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full bg-purple-300 text-black font-bold py-3 rounded-full hover:bg-purple-400">
                Obtener Premium para Estudiantes
              </button>
              <button className="w-full border border-gray-400 text-white py-3 rounded-full font-bold mt-2 hover:bg-neutral-800">
                Un pago único
              </button>
            </div>
          </div>

          {/* Card */}
          <div className="bg-neutral-900 rounded-lg p-6 flex flex-col justify-between border border-neutral-800 bg-neutral-800">
            <div>
              <span className="text-sm flex gap-2 text-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
                  </svg>
                  Premium
                </span>
              <h3 className="text-3xl font-semibold font-bold mt-1 text-yellow-200">Duo</h3>
              <p className="text-lg font-semibold mt-1">$26.500 al mes</p>
              <hr className="my-3 bg-neutral-500 h-[0.7px] border-none" />

              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>2 cuentas Premium</li>
                <li>Cancela cuando quieras</li>
                <li>Suscripción o un pago único</li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full bg-yellow-300 text-black font-bold py-3 rounded-full hover:bg-yellow-400">
                Obtener Premium Duo
              </button>
              <button className="w-full border border-gray-400 text-white py-3 rounded-full font-bold mt-2 hover:bg-neutral-800">
                Un pago único
              </button>
            </div>
          </div>

          {/* Card */}
          <div className="bg-neutral-900 rounded-lg p-6 flex flex-col justify-between border border-neutral-800 bg-neutral-800">
            <div>
              <span className="text-sm flex gap-2 text-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
                  </svg>
                  Premium
                </span>
              <h3 className="text-3xl font-semibold font-bold mt-1 text-blue-200">Familiar</h3>
              <p className="text-lg font-semibold mt-1">$40.000 al mes</p>
              <hr className="my-3 bg-neutral-500 h-[0.7px] border-none" />

              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>Hasta 6 cuentas Premium</li>
                <li>Control de contenido explícito</li>
                <li>Cancela cuando quieras</li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full bg-blue-200 text-black font-bold py-3 rounded-full hover:bg-blue-300">
                Obtener Premium Familiar
              </button>
              <button className="w-full border border-gray-400 text-white py-3 rounded-full font-bold mt-2 hover:bg-neutral-800">
                Un pago único
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};