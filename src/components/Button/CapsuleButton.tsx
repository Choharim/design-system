import React, { ComponentProps, forwardRef } from 'react'
import Button from '.'
import styled from '@emotion/styled'

const CapsuleButton = forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof Button>
>(({ children, ...attributes }, forwardRef) => {
  return (
    <ThemeButton {...attributes} ref={forwardRef}>
      {children}
    </ThemeButton>
  )
})

export default CapsuleButton

CapsuleButton.displayName = 'CapsuleButton'

const ThemeButton = styled(Button)`
  border-radius: 9999px;
  width: fit-content;
`
