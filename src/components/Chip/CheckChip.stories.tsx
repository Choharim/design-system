import { StoryObj, Meta } from '@storybook/react'
import CheckChip from './CheckChip'
import { ChangeEvent, ComponentProps, useState } from 'react'

const meta: Meta<typeof CheckChip> = {
  title: 'components/CheckChip',
  tags: ['autodocs'],
  component: CheckChip,
}

export default meta

type Story = StoryObj<typeof CheckChip>

const Template = (args: Story['args']) => {
  const [checked, setChecked] = useState(false)

  const toggleCheckedForChip = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.checked)
  }

  return (
    <CheckChip
      {...args}
      checked={checked}
      htmlFor="checkChip"
      onChange={toggleCheckedForChip}
    >
      CheckChip
    </CheckChip>
  )
}

export const Outline: Story = {
  render: Template,
  args: {
    variety: 'outline',
  },
}

export const Fill: Story = {
  render: Template,
  args: {
    variety: 'fill',
  },
}
