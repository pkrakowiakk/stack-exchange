import type { Meta, StoryObj } from '@storybook/react';
import Pagination from '../components/Pagination';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: "Pagination",
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