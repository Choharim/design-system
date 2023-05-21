import styled from '@emotion/styled'
import { ChangeEvent, ComponentProps, forwardRef, useMemo } from 'react'

import Chip, { ChipProps, ChipStyle } from '.'

import getVariety from './utils/getVariety'
import { RequiredFields } from 'types/shared/narrow'
import { CombineType } from 'types/shared/extendable'
import { hiddenElement } from 'utils/accessibility'

type InputProps = RequiredFields<
  Pick<ComponentProps<'input'>, 'onChange' | 'checked'>,
  'checked'
>

type CheckChipProps = CombineType<
  RequiredFields<Omit<ChipProps<'label'>, 'as'>, 'htmlFor'>,
  InputProps
>

const CheckChip = forwardRef<HTMLLabelElement, CheckChipProps>(
  (
    {
      variety = 'outline',
      size = 'medium',
      typoVariety = 'body_1',

      checked,
      onChange,
      children,
      ...labelAttributes
    },
    forwardRef
  ) => {
    const { htmlFor } = labelAttributes

    const styles = useMemo(
      () => ({ variety, typoVariety, size }),
      [variety, typoVariety, size]
    )

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      /**
       * checked 값을 조절하기 위해서는
       * onChange 핸들러가 연결되어야 합니다.
       */
      onChange?.(e)
    }

    return (
      <CheckChipWrapper
        {...labelAttributes}
        {...styles}
        checked={checked}
        as="label"
        ref={forwardRef}
        clickable
      >
        {children}

        <HiddenInput
          type="checkbox"
          id={htmlFor}
          onChange={handleInputChange}
          checked={checked}
        />
      </CheckChipWrapper>
    )
  }
)

export default CheckChip

CheckChip.displayName = 'CheckChip'

type CheckChipStyle = CombineType<
  Omit<ChipStyle, 'clickable'>,
  Pick<InputProps, 'checked'>
>

const CheckChipWrapper = styled(Chip)<CheckChipStyle>`
  position: relative;

  ${({ checked, variety, theme }) =>
    getVariety({ variety, status: checked ? 'checked' : 'default' }, theme)};
`

const HiddenInput = styled.input`
  ${hiddenElement}
`
