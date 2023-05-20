import { StoryObj, Meta } from '@storybook/react'

import Spinner from '.'

const meta: Meta<typeof Spinner> = {
  title: 'components/Spinner',
  component: Spinner,

  args: {
    size: 'medium',
    color: 'primary400',
  },
}

export default meta

type Story = StoryObj<typeof Spinner>

export const Basic: Story = {}
