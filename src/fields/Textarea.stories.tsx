// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Field } from './Field';

const meta: Meta<typeof Field.Textarea> = {
  title: 'component/Fields',
  component: Field.Textarea,
};

export default meta;
type Story = StoryObj<typeof Field.Textarea>;

export const TextArea: Story = {
  render: (args) => (
    <Field>
      <Field.Label>Textarea</Field.Label>
      <Field.Textarea {...args} />
    </Field>
  ),
  args: {
    placeholder: 'Textarea',
    isResizable: true,
  },
};
