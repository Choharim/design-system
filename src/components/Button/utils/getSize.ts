import { CSSObject } from '@emotion/react'

import { ButtonStyle } from '..'

export type Size = 'small' | 'medium' | 'large'

const SIZE: Record<Size, CSSObject> = {
  small: {
    height: '36px',
    padding: '0 14px',
  },
  medium: {
    height: '40px',
    padding: '0 16px',
  },
  large: {
    height: '48px',
    padding: '0 20px',
  },
}

const getSize = (size: Size) => {
  return SIZE[size]
}

export default getSize
