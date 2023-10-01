import * as ToastRadix from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'

import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewPort,
} from './styles'

export type ToastProps = ComponentProps<typeof ToastRoot> & {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastRadix.Provider>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        <ToastClose>
          <X weight="light" size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewPort />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'
