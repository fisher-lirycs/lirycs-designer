import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ButtonGroup from ".";
import Button from "../Button";
import Dropdown from "../Dropdown";

export default {
  title: "ButtonGroup",
  component: ButtonGroup,
} as Meta<typeof ButtonGroup>;

const DefaultTemplate: StoryFn<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button theme="secondary">Left</Button>
    <Button theme="secondary">Middle</Button>
    <Button theme="secondary">Right</Button>
    <Dropdown
      id="dropdown-button"
      title="Dropdown"
      as="ButtonGroup"
      theme="secondary"
    >
      <Dropdown.Item eventKey="0">Action</Dropdown.Item>
      <Dropdown.Item eventKey="1">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Something else</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="3">Separated</Dropdown.Item>
    </Dropdown>
  </ButtonGroup>
);

export const Default = DefaultTemplate.bind({});
Default.args = {};
