import { cn } from 'shared/lib/helpers'

import styles from './Modal.module.scss'
import { type MouseEvent, type ReactNode, useCallback, useEffect } from 'react'
import { Portal } from 'shared/ui'

interface ModalProps {
  children: ReactNode
  onClose: () => void
  isOpen: boolean
  className?: string
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    onClose,
    isOpen
  } = props

  const onClickContent = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', onKeyDown)
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  return (
    <Portal>
      <div
        className={cn([styles.Modal, className], {
          [styles.opened]: isOpen
        })}
        onMouseDown={onClose}
      >
        <div className={styles.overlay}>
          <div onMouseDown={onClickContent} className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
