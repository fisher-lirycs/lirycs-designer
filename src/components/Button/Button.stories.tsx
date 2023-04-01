import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from ".";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const DefaultTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args}> Button </Button>
);

export const Default = DefaultTemplate.bind({});
Default.args = {};
