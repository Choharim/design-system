import { ComponentProps, forwardRef, useMemo } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import BaseButton from './BaseButton'

import getVariety, { Variety } from './utils/getVariety'
import getSize, { Size } from './utils/getSize'
import { CombineType } from 'types/shared/extendable'

export interface ButtonStyle {
  variety: Variety
  size: Size
}

type ButtonProps = CombineType<
  ComponentProps<typeof BaseButton>,
  Partial<ButtonStyle>
>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variety = 'contain', size = 'medium', children, ...buttonAttributes },
    forwardRef
  ) => {
    const styles = useMemo(() => ({ variety, size }), [variety, size])

    return (
      <ThemeButton {...buttonAttributes} {...styles} ref={forwardRef}>
        {children}
      </ThemeButton>
    )
  }
)

export default Button

Button.displayName = 'Button'

const ThemeButton = styled(BaseButton)<ButtonStyle>`
  border-radius: 4px;

  ${({ theme, variety, size }) => css`
    ${getVariety(variety, theme)};
    ${getSize(size)};
  `};
  transition: 150ms ease;
`
