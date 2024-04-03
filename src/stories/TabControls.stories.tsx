import type { Meta, StoryObj } from '@storybook/react';
import TagsControls from '../components/TagControls';

const meta: Meta<typeof TagsControls> = {
  component: TagsControls,
  title: "TagControls",
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
}
}