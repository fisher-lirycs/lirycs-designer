import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CloseButton from ".";

export default {
  title: "CloseButton",
  component: CloseButton,
} as Meta<typeof CloseButton>;

const DefaultTemplate: StoryFn<typeof CloseButton> = (args) => (
  <CloseButton {...args} />
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  onClick: () => true,
};
