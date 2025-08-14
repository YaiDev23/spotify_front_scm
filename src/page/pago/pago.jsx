"use client"

import { useState } from "react"
import { button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function SpotifyPurchase() {
  const [paymentMethod, setPaymentMethod] = useState("card")

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
            <h1 className="text-2xl font-bold">Compra</h1>
            <button variant="link" className="text-sm text-gray-600 p-0">
              Cambiar de plan
            </button>
          </div>

          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
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
                      <div className="text-2xl font-bold">0,00 COP</div>
                      <div className="text-sm text-gray-600">Por 1 mes</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• Hoy: 1 mes por 0,00 COP</p>
                    <p>• A partir del 14 sept 2025: 18.500,00 COP/mes</p>
                    <p>• Te enviaremos un recordatorio 7 días antes del cobro.</p>
                    <p>
                      • Cancela cuando quieras online.{" "}
                      <span className="underline cursor-pointer">Consulta las condiciones</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Method */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Forma de pago</h2>

          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
            <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex-1 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Tarjeta de crédito o débito</span>
                      <div className="flex items-center gap-2">
                        <img src="/visa-logo-generic.png" alt="Visa" className="h-5" />
                        <img src="/mastercard-logo.png" alt="Mastercard" className="h-5" />
                        <img src="/american-express-logo.png" alt="American Express" className="h-5" />
                      </div>
                    </div>
                  </Label>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">PayPal</span>
                      <img src="/paypal-logo.png" alt="PayPal" className="h-5" />
                    </div>
                  </Label>
                </div>
              </CardContent>
            </Card>
          </RadioGroup>
        </div>

        {/* Summary */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-400">Resumen</h2>
          {/* Summary content would go here */}
        </div>
      </div>
    </div>
  )
}
