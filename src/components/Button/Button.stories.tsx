import { StoryObj, Meta } from '@storybook/react'

import Button from '.'

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

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
