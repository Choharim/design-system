import { StoryObj, Meta } from '@storybook/react'
import CapsuleButton from './CapsuleButton'

const meta: Meta<typeof CapsuleButton> = {
  title: 'components/CapsuleButton',
  tags: ['autodocs'],
  component: CapsuleButton,
  args: {
    size: 'medium',
    variety: 'contain',
  },
}

export default meta

type Story = StoryObj<typeof CapsuleButton>

export const Contain: Story = {
  args: {
    children: 'contain',
    variety: 'contain',
  },
}

export const Outline: Story = {
  args: {
    children: 'outline',
    variety: 'outline',
  },
}

export const Text: Story = {
  args: {
    children: 'text',
    variety: 'text',
  },
}
