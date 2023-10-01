import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'

import { TooltipArrow, TooltipContent } from './styles'

export type TooltipProps = ComponentProps<typeof TooltipRadix.Root> & {
  content: string | ReactNode
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root {...props}>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipContent>
            <TooltipArrow />

            {content}
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
