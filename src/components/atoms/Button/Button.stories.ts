import type { Meta, StoryObj } from "@storybook/html";
import type { ButtonProps } from "./Button.types";
import { Button } from "./Button";

const meta: Meta<ButtonProps> = {
    title: "Atoms/Button",
    tags: ["autodocs"],
    render: (args) => Button(args),
    argTypes: {
        varient: {
            control: "select",
            options: ["primary", "secondary", "ghost"],
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        disabled: {
            control: "boolean",
        },
        label: {
            control: "text",
        },
    },
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    label: 'Click me',
    varient: 'primary',
    size: 'md',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Click me',
    varient: 'secondary',
    size: 'md',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Click me',
    varient: 'ghost',
    size: 'md',
  },
};


export const Disabled: Story = {
  args: {
    label: 'Click me',
    varient: 'primary',
    disabled: true,
  },
};