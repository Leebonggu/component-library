// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'component/Buttons',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    isFullWidth: false,
    disabled: false,
  },
};
