import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Badge from ".";

export default {
  title: "Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const DefaultTemplate: ComponentStory<typeof Badge> = (args) => {
  return <Badge {...args}>Badge</Badge>;
};

export const Default = DefaultTemplate.bind({});
Default.args = {};
