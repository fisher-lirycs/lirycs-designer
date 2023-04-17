import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ListGroup from ".";

export default {
  title: "ListGroup",
  component: ListGroup,
} as Meta<typeof ListGroup>;

const DefaultTemplate: StoryFn<typeof ListGroup> = (args) => {
  return (
    <ListGroup {...args}>
      <ListGroup.Item>normal</ListGroup.Item>
      <ListGroup.Item active>active</ListGroup.Item>
      <ListGroup.Item disabled>disabled</ListGroup.Item>
      <ListGroup.Item theme="primary">Primary</ListGroup.Item>
      <ListGroup.Item theme="secondary">Secondary</ListGroup.Item>
      <ListGroup.Item theme="success">Success</ListGroup.Item>
      <ListGroup.Item theme="danger">Danger</ListGroup.Item>
      <ListGroup.Item theme="warning">Warning</ListGroup.Item>
      <ListGroup.Item theme="info">Info</ListGroup.Item>
      <ListGroup.Item theme="light">Light</ListGroup.Item>
      <ListGroup.Item theme="dark">Dark</ListGroup.Item>
    </ListGroup>
  );
};

export const Default = DefaultTemplate.bind({});
Default.args = {};

const LinkTemplate: StoryFn<typeof ListGroup> = (args) => {
  return (
    <ListGroup {...args}>
      <ListGroup.Item action href={"#link"}>
        Link nomral
      </ListGroup.Item>
      <ListGroup.Item action href={"#link"} active>
        Link active
      </ListGroup.Item>
      <ListGroup.Item action href={"#link"} disabled>
        Link disabled
      </ListGroup.Item>
      <ListGroup.Item action href={"#link"} theme="primary">
        Primary
      </ListGroup.Item>
      <ListGroup.Item action href={"#link"} theme="secondary">
        Secondary
      </ListGroup.Item>
      <ListGroup.Item action href={"#link"} theme="success">
        Success
      </ListGroup.Item>
      <ListGroup.Item action href={"#link"} theme="danger">
        Danger
      </ListGroup.Item>
      <ListGroup.Item action href={"#link"} theme="warning">
        Warning
      </ListGroup.Item>
      <ListGroup.Item action href={"#link"} theme="info">
        Info
      </ListGroup.Item>
      <ListGroup.Item action href={"#link"} theme="light">
        Light
      </ListGroup.Item>
      <ListGroup.Item action href={"#link"} theme="dark">
        Dark
      </ListGroup.Item>
    </ListGroup>
  );
};

export const Link = LinkTemplate.bind({});
Link.args = {};

const ButtonTemplate: StoryFn<typeof ListGroup> = (args) => {
  const alertClicked = () => {
    alert("You clicked the third ListGroupItem");
  };
  return (
    <ListGroup {...args}>
      <ListGroup.Item action onClick={alertClicked}>
        Button nomral
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked} active>
        Button active
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked} disabled>
        Button disabled
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked} theme="primary">
        Primary
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked} theme="secondary">
        Secondary
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked} theme="success">
        Success
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked} theme="danger">
        Danger
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked} theme="warning">
        Warning
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked} theme="info">
        Info
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked} theme="light">
        Light
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked} theme="dark">
        Dark
      </ListGroup.Item>
    </ListGroup>
  );
};

export const Button = ButtonTemplate.bind({});
Button.args = {};
