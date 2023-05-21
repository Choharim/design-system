import { CSSProperties, ElementType, forwardRef, useMemo } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { ColorKey, FontKey } from 'types'
import {
  PolymorphicComponentProps,
  PolymorphicRef,
} from 'types/shared/polymorphic'
import { FONT } from 'constants/font'

const DEFAULT_TAG: ElementTag = 'span'

type ElementTag = Extract<
  ElementType,
  'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label'
>

export type TypoStyle = {
  variety: FontKey
  color: ColorKey | 'inherit'
  wrap: CSSProperties['whiteSpace']
}

export type TypoProps<E extends ElementType> = PolymorphicComponentProps<
  E,
  Partial<TypoStyle>
>

const Typo = forwardRef(
  <E extends ElementType>(
    {
      variety = 'body_1',
      color = 'black',
      wrap,
      as = DEFAULT_TAG,
      children,
      ...attributes
    }: TypoProps<E | typeof DEFAULT_TAG>,
    forwardRef: PolymorphicRef<E>
  ) => {
    const styles = useMemo(
      () => ({ variety, color, wrap }),
      [variety, color, wrap]
    )

    return (
      <TypoWrapper {...attributes} {...styles} ref={forwardRef} as={as}>
        {children}
      </TypoWrapper>
    )
  }
)

/**
 * @description
 * forwardRef에 제네릭을 적용하면 prop 타입이 추론되지 않아
 * 타입 단언을 합니다.
 */
export default Typo as <E extends ElementTag>(
  props: TypoProps<E> & { ref?: PolymorphicRef<E> }
) => ReturnType<typeof Typo>

Typo.displayName = 'Typo'

const TypoWrapper = styled(DEFAULT_TAG)<TypoStyle>`
  ${({ variety }) => FONT[variety]};
  color: ${({ color, theme }) =>
    color === 'inherit' ? 'inherit' : theme.color[color]};

  ${({ wrap }) => css`
    white-space: ${wrap};
  `}
`
