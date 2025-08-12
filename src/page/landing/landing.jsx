import { X, Music } from "lucide-react"
// import { button } from "@/components/ui/button"
import Banner from "../../assets/img.png"

export const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-[#121212] to-[#121212] relative ">
      {/* Blue notification bar */}
      <div className="bg-blue-500 text-white text-center py-2 px-4 text-sm relative">
        <span className="underline cursor-pointer">Colombia (English)</span>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <X size={16} />
        </button>
      </div>

      {/* Header */}
      <header className="bg-black text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Spotify Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className=""> <img src="https://www.spotify.com/co-es/" /></div>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Main Content */}
      <main className="relative mb-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Disfruta mucho más de tu música con Premium Individual.
                </h1>
                <p>
                  Disfruta de música sin interrupciones con Spotify Premium.
                </p>
                <p>
                  A partir de solo $ 18.500. Cancela cuando quieras.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  size="lg"
                  className="bg-[#FFD2D7] hover:bg-[#FFD2D7] text-black px-8 py-3 rounded-full text-base font-bold"
                >
                  Obtener Premium Individual
                </button>
                <button
                  variant="outline"
                  size="lg"
                  className="border border-gray-500 text-white bg-black  px-8 py-3 rounded-full text-base font-bold "
                >
                  Ver todos los planes
                </button>
              </div>

              <div className="text-xs text-white max-w-md">
                <a href="#" className="underline hover:text-white">
                  Se aplican Términos.
                </a>
              </div>
            </div>

            {/* Right Content - Album Grid */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-4 gap-2 transform hidden rotate-340 scale-110">
                {/* Row 1 */}
                <div className="bg-blue-400 aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="Album cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-purple-600 aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="Album cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-orange-400 aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="Album cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-pink-400 aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="Album cover"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Row 2 */}
                <div className="bg-teal-400 aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="Album cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-yellow-400 aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="Album cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-green-400 aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="Album cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-blue-600 aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="Album cover"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Row 3 */}
                <div className="bg-red-400 aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="Album cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-purple-400 aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="Album cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-orange-500 aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="Album cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-cyan-400 aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="Album cover"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Spotify Logo Circle at Bottom */}
        <div className="absolute bottom-8 right-8">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-green-500 rounded-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className=" h-20 absolute mt-7 bottom-0 left-0 right-0 flex items-center justify-center">
        <img src={Banner} alt="" />
      </div>
    </div>
  )
}