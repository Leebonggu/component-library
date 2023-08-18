// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Field } from './Field';

const meta: Meta<typeof Field.Input> = {
  title: 'component/Fields',
  component: Field.Input,
};

export default meta;
type Story = StoryObj<typeof Field.Input>;

export const Input: Story = {
  render: (args) => (
    <Field>
      <Field.Label>Input</Field.Label>
      <Field.Input {...args} />
    </Field>
  ),
  args: {
    placeholder: 'Input',
  },
};
