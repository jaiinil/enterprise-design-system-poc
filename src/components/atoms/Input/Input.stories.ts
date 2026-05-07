import type { Meta, StoryObj } from "@storybook/html";
import type { InputProps } from "./Input.type";
import { Input } from "./Input";

const meta: Meta<InputProps> = {
  title: "Atoms/Input",
  tags: ["autodocs"],
  render: (args) => Input(args),
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "range"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    placeholder: {
      control: "text",
    },
    value: {
      control: "text",
    },
    error: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
};
export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    type: 'text',
    size: 'md',
    placeholder: 'Enter text...',
    disabled: false,
    error: '',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    size: 'md',
    placeholder: 'Enter email...',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    size: 'md',
    placeholder: 'Enter password...',
  },
};

export const Small: Story = {
  args: {
    type: 'text',
    size: 'sm',
    placeholder: 'Small input...',
  },
};

export const Large: Story = {
  args: {
    type: 'text',
    size: 'lg',
    placeholder: 'Large input...',
  },
};

export const WithError: Story = {
  args: {
    type: 'text',
    size: 'md',
    placeholder: 'Enter text...',
    error: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    type: 'text',
    size: 'md',
    placeholder: 'Disabled input...',
    disabled: true,
  },
};