import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CloseButton from ".";

export default {
  title: "CloseButton",
  component: CloseButton,
} as ComponentMeta<typeof CloseButton>;

const DefaultTemplate: ComponentStory<typeof CloseButton> = (args) => (
  <CloseButton {...args} />
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  onClick: () => true,
};
