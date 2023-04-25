import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Nav from ".";
import Dropdown from "../Dropdown";

export default {
  title: "Nav",
  component: Nav,
} as Meta<typeof Nav>;

const DefaultTemplate: StoryFn<typeof Nav> = (args) => {
  return (
    <Nav {...args} defaultActiveKey="active">
      <Nav.Item eventKey="active">Active</Nav.Item>
      <Nav.Item eventKey="link-1">Link</Nav.Item>
      <Nav.Item eventKey="link-2">Link</Nav.Item>
      <Nav.Item eventKey="disabled" disabled>
        Disabled
      </Nav.Item>
      <Dropdown id="nav-dropdown" title="Dropdown" isNav>
        <Dropdown.Item eventKey="0">Action</Dropdown.Item>
        <Dropdown.Item eventKey="1">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="3">Separated</Dropdown.Item>
      </Dropdown>
    </Nav>
  );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
  onSelect: (selectedKey) => alert(`selected ${selectedKey}`),
};
