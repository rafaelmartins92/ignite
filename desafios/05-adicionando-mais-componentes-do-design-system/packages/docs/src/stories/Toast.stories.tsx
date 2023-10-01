import { Button, Toast, ToastProps } from '@orafadev-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import { useEffect, useRef, useState } from 'react'

const DemoToast = (props: ToastProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const timeRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timeRef.current)
  }, [])

  return (
    <div>
      <Button
        onClick={() => {
          setIsOpen(false)
          window.clearTimeout(timeRef.current)
          timeRef.current = window.setTimeout(() => setIsOpen(true), 100)
        }}
      >
        Schedule a call
      </Button>
      <Toast open={isOpen} onOpenChange={setIsOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Surfaces/Toast',
  component: DemoToast,
  args: {
    title: 'Call scheduled',
    description: 'October 4th, Wednesday at 4pm',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
