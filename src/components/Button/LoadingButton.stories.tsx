import { StoryObj, Meta } from '@storybook/react'
import LoadingButton from './LoadingButton'

const meta: Meta<typeof LoadingButton> = {
  title: 'components/LoadingButton',
  component: LoadingButton,
  args: {
    isLoading: true,
  },
}

export default meta

type Story = StoryObj<typeof LoadingButton>

export const Basic: Story = {
  args: {
    children: 'loading',
    spinnerSize: 'small',
  },
}
