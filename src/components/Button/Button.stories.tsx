import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Button from ".";

export default {
  title: "Button",
  component: Button,
} as Meta<typeof Button>;

const DefaultTemplate: StoryFn<typeof Button> = (args) => (
  <Button {...args}> Button </Button>
);

export const Default = DefaultTemplate.bind({});
Default.args = {};
