// REF: https://dev.to/theodorusclarence/step-by-step-how-to-setup-storybook-with-nextjs-and-tailwind-css-lf
import { StoryObj } from "@storybook/react";

import { Button } from "../index";

type Story = StoryObj<typeof Button>;

export default {
  title: "libs/Button",
  component: Button,
  argTypes: {
    // children is the property we want to remove from the UI
    children: {
      table: {
        disable: true,
      },
    },
  },
};
export const Default: Story = {
  args: {
    children: <>Button</>,
  },
};
export const Primary: Story = {
  args: {
    children: <>Primary Button</>,
    variant: "primary",
  },
};
export const Secondary: Story = {
  args: {
    children: <>Secondary Button</>,
    variant: "secondary",
  },
};
