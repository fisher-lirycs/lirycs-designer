import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Dropdown from ".";

export default {
  title: "Dropdown",
  component: Dropdown,
} as Meta<typeof Dropdown>;

const DefaultTemplate: StoryFn<typeof Dropdown> = (args) => {
  return (
    <Dropdown {...args}>
      <Dropdown.Item eventKey="0">Action</Dropdown.Item>
      <Dropdown.Item eventKey="1">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Something else</Dropdown.Item>
    </Dropdown>
  );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
  id: "dropdown-item-button",
  title: "Dropdown button",
};
