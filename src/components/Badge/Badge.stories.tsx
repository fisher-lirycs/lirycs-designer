import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Badge from ".";

export default {
  title: "Badge",
  component: Badge,
} as Meta<typeof Badge>;

const DefaultTemplate: StoryFn<typeof Badge> = (args) => {
  return <Badge {...args}>Badge</Badge>;
};

export const Default = DefaultTemplate.bind({});
Default.args = {};
