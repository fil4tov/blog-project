import { createPortal } from 'react-dom'
import { type ReactNode } from 'react'

interface PortalProps {
  children: ReactNode
  container?: Element | DocumentFragment
}

const DEFAULT_PORTAL_CONTAINER = document.querySelector('#modals-container')

export const Portal = (props: PortalProps) => {
  const {
    children,
    container = DEFAULT_PORTAL_CONTAINER ?? document.body
  } = props
  return createPortal(children, container)
}
