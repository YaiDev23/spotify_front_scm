import { Search, CreditCard, User, Music, Grid3X3, Smartphone, Shield, Globe, ChevronDown } from "lucide-react"


export const SpotifySupport = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-black">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 text-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
                </svg>
            </div>
            <span className="text-xl font-bold">Spotify</span>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">
              Explorar Premium
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Instalar aplicación
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
            <Globe className="w-6 h-6 mr-2" />
          <button variant="ghost" size="sm" className="flex justify-center items-center font-bold  p-3 rounded-full text-gray-300 hover:text-white">
            Cerrar sesión
          </button>
          <button variant="outline" size="sm" className="flex justify-center items-center bg-white p-3 rounded-full border-gray-600 text-black hover:bg-gray-800 gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
            Cuenta
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="text-start mb-20">
          <p className="text-gray-400 text-sm mb-4">Asistencia de Spotify</p>
          <h1 className="text-4xl font-bold mb-8">¿Cómo te podemos ayudar?</h1>
        </div>

        {/* User Greeting */}
        <div className="flex items-center justify-start mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
            </div>
            <span className="text-xl font-semibold">¡Hola!</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Busca contenido"
            className="w-full pl-12 py-3 bg-white text-black border-0 rounded-lg text-base"
          />
        </div>

        {/* Support Categories */}
        <div className="space-y-0 bg-gray-800 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-500 bg-neutral-800 hover:bg-gray-750 cursor-pointer">
            <div className="flex items-center space-x-3">
              <CreditCard className="w-5 h-5 text-green-500" />
              <span className="font-medium">Pagos y facturación</span>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>

          <div className="flex items-center justify-between p-4 border-b border-gray-500 bg-neutral-800 hover:bg-gray-750 cursor-pointer">
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-green-500" />
              <span className="font-medium">Administra tu cuenta</span>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>

          <div className="flex items-center justify-between p-4 border-b border-gray-500 bg-neutral-800 hover:bg-gray-750 cursor-pointer">
            <div className="flex items-center space-x-3">
              <Music className="w-5 h-5 text-green-500" />
              <span className="font-medium">Planes Premium</span>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>

          <div className="flex items-center justify-between p-4 border-b border-gray-500 bg-neutral-800 hover:bg-gray-750 cursor-pointer">
            <div className="flex items-center space-x-3">
              <Grid3X3 className="w-5 h-5 text-green-500" />
              <span className="font-medium">Funciones integradas en la aplicación</span>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>

          <div className="flex items-center justify-between p-4 border-b border-gray-500 bg-neutral-800 hover:bg-gray-750 cursor-pointer">
            <div className="flex items-center space-x-3">
              <Smartphone className="w-5 h-5 text-green-500" />
              <span className="font-medium">Dispositivos y solución de problemas</span>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>

          <div className="flex items-center justify-between border-gray-500 bg-neutral-800 p-4 hover:bg-gray-750 cursor-pointer">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="font-medium">Seguridad y privacidad</span>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Quick Help Section */}
      </main>
        <div className="mt-10 relative h-20 flex items-center justify-center text-center bg-neutral-800 w-full">
          <h2 className="text-2xl font-bold text-gray-300">Ayuda rápida</h2>
        </div>
    </div>
  )
}
