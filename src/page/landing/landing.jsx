import { X, Music } from "lucide-react"
// import { button } from "@/components/ui/button"

export const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900 relative overflow-hidden">
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
      <main className="relative">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Escucha sin límites.
                  <br />
                  Prueba 1 mes de Premium
                  <br />
                  Individual por $ 0.
                </h1>
                <p className="text-lg text-gray-300">Después, solo cuesta $ 18.500 por mes. Cancela cuando quieras.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  size="lg"
                  className="bg-[#FFD2D7] hover:bg-[#FFD2D7] text-black font-semibold px-8 py-6 rounded-full text-lg"
                >
                  Empezar
                </button>
                <button
                  variant="outline"
                  size="lg"
                  className="border-white text-white bg-black hover:bg-white hover:text-black px-8 py-6 rounded-full text-lg "
                >
                  Ver todos los planes
                </button>
              </div>

              <div className="text-xs text-gray-400 max-w-md">
                $ 0 por 1 mes. Después, cuesta $ 18.500 al mes. La oferta solo está disponible si aún no probaste
                Premium.{" "}
                <a href="#" className="underline hover:text-white">
                  Se aplican Términos
                </a>
                .
              </div>
            </div>

            {/* Right Content - Album Grid */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-4 gap-2 transform rotate-12 scale-110">
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

        {/* Floating Musical Notes */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-8 text-white/30">
            <Music size={24} className="animate-bounce" style={{ animationDelay: "0s" }} />
            <Music size={20} className="animate-bounce" style={{ animationDelay: "0.2s" }} />
            <Music size={28} className="animate-bounce" style={{ animationDelay: "0.4s" }} />
            <Music size={16} className="animate-bounce" style={{ animationDelay: "0.6s" }} />
            <Music size={24} className="animate-bounce" style={{ animationDelay: "0.8s" }} />
            <Music size={20} className="animate-bounce" style={{ animationDelay: "1s" }} />
            <Music size={18} className="animate-bounce" style={{ animationDelay: "1.2s" }} />
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
    </div>
  )
}