import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Divider } from "../src";

const meta = {
  title: "Components/Divider",
  component: Divider,

  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithText: Story = {
  args: {
    children: "OR",
  },
};
