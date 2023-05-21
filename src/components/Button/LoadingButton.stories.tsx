import { StoryObj, Meta } from '@storybook/react'
import LoadingButton from './LoadingButton'
import { useEffect, useState } from 'react'

const meta: Meta<typeof LoadingButton> = {
  title: 'components/LoadingButton',
  tags: ['autodocs'],
  component: LoadingButton,
  args: {
    isLoading: true,
  },
}

export default meta

type Story = StoryObj<typeof LoadingButton>

const Template = (args: Story['args']) => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setIsLoading((prev) => !prev)
    }, 2000)

    return () => {
      if (id) clearInterval(id)
    }
  }, [])

  return <LoadingButton {...args} isLoading={isLoading} />
}
export const Basic: Story = {
  args: {
    children: 'loading',
    spinnerSize: 'small',
  },
  render: Template,
}
