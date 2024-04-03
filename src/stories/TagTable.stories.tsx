import type { Meta, StoryObj } from '@storybook/react';
import TagTable from '../components/TagTable';

const meta: Meta<typeof TagTable> = {
  component: TagTable,
  title: "TagTable",
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