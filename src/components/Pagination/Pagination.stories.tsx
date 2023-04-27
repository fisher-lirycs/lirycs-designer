import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Pagination from ".";

export default {
  title: "Pagination",
  component: Pagination,
} as Meta<typeof Pagination>;

const DefaultTemplate: StoryFn<typeof Pagination> = (args) => {
  return <Pagination {...args} />;
};

export const Default = DefaultTemplate.bind({});
Default.args = {
  allPages: 5,
};
