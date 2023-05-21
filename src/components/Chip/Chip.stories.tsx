import { StoryObj, Meta } from '@storybook/react'

import Chip from './index'

const meta: Meta<typeof Chip> = {
  title: 'components/Chip',
  tags: ['autodocs'],
  component: Chip,
}

export default meta

type Story = StoryObj<typeof Chip>

export const Outline: Story = {
  args: {
    children: 'outline',
    variety: 'outline',
  },
}

export const Fill: Story = {
  args: {
    children: 'fill',
    variety: 'fill',
  },
}
