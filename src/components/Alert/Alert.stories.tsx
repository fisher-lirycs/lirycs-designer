import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Alert from ".";
import Divider from "../Divider";

export default {
  title: "Alert",
  component: Alert,
} as Meta<typeof Alert>;

const DefaultTemplate: StoryFn<typeof Alert> = (args) => (
  <Alert {...args}>
    <p>
      Aww yeah, you successfully read this important alert message. This example
      text is going to run a bit longer so that you can see how spacing within
      an alert works with this kind of content.
    </p>
    <Divider />
    <p className="mb-0">
      Whenever you need to, be sure to use margin utilities to keep things nice
      and tidy.
    </p>
  </Alert>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  header: "Hey, nice to see you",
  dismissible: true,
};
