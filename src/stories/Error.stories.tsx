import type { Meta, StoryObj } from '@storybook/react';
import Error from '../components/Error';

const meta: Meta<typeof Error> = {
  component: Error,
  title: "Error",
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const BadParameter: Story = {
  args: {
    code: 400,
    name: "bad_parameter"
  }
}

export const ThrottleViolation: Story = {
  args: {
    code: 400,
    name: "throttle_violation"
  }
}