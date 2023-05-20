import { CSSObject } from '@emotion/react'

import { ButtonStyle } from '..'

export type Size = 'small' | 'medium' | 'large'

const SIZE: Record<Size, CSSObject> = {
  small: {
    height: '30px',
    padding: '0 8px',
  },
  medium: {
    height: '40px',
    padding: '0 12px',
  },
  large: {
    height: '50px',
    padding: '0 16px',
  },
}

const getSize = (size: Size) => {
  return SIZE[size]
}

export default getSize
