'use client'

import { useEffect, useState, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  id?: string
}

const Portal = ({ children, id = 'portal-root' }: PortalProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Crear el contenedor del portal si no existe
    let portalRoot = document.getElementById(id)
    if (!portalRoot) {
      portalRoot = document.createElement('div')
      portalRoot.setAttribute('id', id)
      // Aplicar estilos críticos inline para evitar conflictos
      portalRoot.style.position = 'fixed'
      portalRoot.style.top = '0'
      portalRoot.style.left = '0'
      portalRoot.style.width = '0'
      portalRoot.style.height = '0'
      portalRoot.style.pointerEvents = 'none'
      portalRoot.style.zIndex = '99999'
      document.body.appendChild(portalRoot)
    }

    return () => {
      // Limpiar el portal si no tiene hijos
      if (portalRoot && portalRoot.childNodes.length === 0) {
        document.body.removeChild(portalRoot)
      }
    }
  }, [id])

  return mounted ? createPortal(children, document.getElementById(id)!) : null
}

export default Portal
