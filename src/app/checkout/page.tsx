'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { loadStripe } from '@stripe/stripe-js'
import { CreditCard, Lock, ArrowLeft } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import Link from 'next/link'

// Initialize Stripe (you'll need to replace with your publishable key)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder')

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, clearCart } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    company: ''
  })

  useEffect(() => {
    if (items.length === 0) {
      router.push('/cart')
    }
  }, [items, router])

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      // Here you would typically:
      // 1. Create a payment intent on your backend
      // 2. Use Stripe Elements or redirect to Stripe Checkout
      // For demo purposes, we'll simulate a successful payment
      
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Clear cart and redirect to success page
      clearCart()
      router.push('/checkout/success')
    } catch (error) {
      console.error('Payment error:', error)
      alert('Error procesando el pago. Por favor intenta de nuevo.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <section className="checkout-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="checkout-header"
        >
          <Link href="/cart" className="back-link">
            <ArrowLeft />
            Volver al carrito
          </Link>
          <h1 className="page-title">Finalizar Compra</h1>
          <div className="secure-badge">
            <Lock className="secure-icon" />
            Pago 100% Seguro
          </div>
        </motion.div>

        <div className="checkout-content">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="checkout-form-section"
          >
            <form onSubmit={handleCheckout} className="checkout-form">
              <h2>Información del Cliente</h2>
              
              <div className="form-group">
                <label htmlFor="name">Nombre Completo *</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                  placeholder="Juan Pérez"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                  placeholder="juan@empresa.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Empresa</label>
                <input
                  type="text"
                  id="company"
                  value={customerInfo.company}
                  onChange={(e) => setCustomerInfo({...customerInfo, company: e.target.value})}
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div className="payment-section">
                <h2>Método de Pago</h2>
                <div className="payment-demo-notice">
                  <p>🔒 Modo Demo: No se procesarán pagos reales</p>
                  <p>En producción, aquí aparecería el formulario de Stripe</p>
                </div>
                
                <div className="demo-card">
                  <CreditCard className="card-icon" />
                  <div>
                    <p>Tarjeta terminada en 4242</p>
                    <p className="card-exp">Expira 12/25</p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="btn btn-primary btn-lg btn-block checkout-btn"
              >
                {isProcessing ? (
                  <>
                    <span className="spinner" />
                    Procesando...
                  </>
                ) : (
                  <>
                    <CreditCard className="btn-icon-left" />
                    Pagar ${total}
                  </>
                )}
              </button>

              <p className="terms-text">
                Al completar tu compra, aceptas nuestros{' '}
                <Link href="/terms">términos y condiciones</Link>
              </p>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-summary"
          >
            <h2>Resumen del Pedido</h2>
            
            <div className="order-items">
              {items.map((item) => (
                <div key={item.id} className="order-item">
                  <div>
                    <h4>{item.name}</h4>
                    <p className="item-quantity">Cantidad: {item.quantity}</p>
                  </div>
                  <div className="item-price">
                    ${item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>

            <div className="order-totals">
              <div className="total-row">
                <span>Subtotal</span>
                <span>${total}</span>
              </div>
              <div className="total-row">
                <span>Implementación</span>
                <span className="free">Gratis</span>
              </div>
              <div className="total-row">
                <span>Soporte (3 meses)</span>
                <span className="free">Incluido</span>
              </div>
              <div className="total-row total">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>

            <div className="guarantees">
              <h3>Garantías Incluidas</h3>
              <ul>
                <li>✓ Satisfacción garantizada o devolución</li>
                <li>✓ Soporte técnico 24/7</li>
                <li>✓ Actualizaciones gratuitas por 1 año</li>
                <li>✓ Implementación sin costo adicional</li>
              </ul>
            </div>

            <div className="secure-payments">
              <p>Pagos procesados de forma segura por</p>
              <div className="payment-logos">
                <span>Stripe</span>
                <span>SSL</span>
                <span>256-bit</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}