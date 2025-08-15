'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, CreditCard } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart()

  return (
    <>
      <section className="cart-page">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="cart-header"
          >
            <h1 className="page-title">Carrito de Compra</h1>
            <p className="page-subtitle">
              {items.length} {items.length === 1 ? 'automatización' : 'automatizaciones'} en tu carrito
            </p>
          </motion.div>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="empty-cart"
            >
              <ShoppingCart className="empty-cart-icon" />
              <h2>Tu carrito está vacío</h2>
              <p>Explora nuestras automatizaciones y agrega las que necesites</p>
              <Link href="/automations" className="btn btn-primary">
                Ver Automatizaciones
                <ArrowRight className="btn-icon" />
              </Link>
            </motion.div>
          ) : (
            <div className="cart-content">
              <div className="cart-items">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="cart-item"
                  >
                    <div className="cart-item-info">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>

                    <div className="cart-item-controls">
                      <div className="quantity-controls">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="quantity-btn"
                          aria-label="Decrease quantity"
                        >
                          <Minus />
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="quantity-btn"
                          aria-label="Increase quantity"
                        >
                          <Plus />
                        </button>
                      </div>

                      <div className="cart-item-price">
                        ${item.price * item.quantity}
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="remove-btn"
                        aria-label="Remove item"
                      >
                        <Trash2 />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="cart-summary"
              >
                <h2>Resumen del Pedido</h2>
                
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${total}</span>
                </div>
                
                <div className="summary-row">
                  <span>Implementación</span>
                  <span>Gratis</span>
                </div>
                
                <div className="summary-row">
                  <span>Soporte (3 meses)</span>
                  <span>Incluido</span>
                </div>
                
                <div className="summary-total">
                  <span>Total</span>
                  <span>${total}</span>
                </div>

                <Link href="/checkout" className="btn btn-primary btn-block btn-lg">
                  <CreditCard className="btn-icon-left" />
                  Proceder al Pago
                </Link>

                <Link href="/automations" className="btn btn-secondary btn-block">
                  Continuar Comprando
                </Link>

                <div className="cart-features">
                  <p>✓ Implementación incluida</p>
                  <p>✓ Soporte técnico 24/7</p>
                  <p>✓ Actualizaciones gratuitas</p>
                  <p>✓ Garantía de satisfacción</p>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}