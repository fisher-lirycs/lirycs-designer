import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Progress from ".";

export default {
  title: "Progress",
  component: Progress,
} as Meta<typeof Progress>;

const DefaultTemplate: StoryFn<typeof Progress> = (args) => {
  return <Progress {...args} />;
};

export const Default = DefaultTemplate.bind({});
Default.args = {
  now: 60,
  label: "60%",
};

const StackedTemplate: StoryFn<typeof Progress> = () => {
  return (
    <Progress>
      <Progress striped theme="success" now={35} key={1} />
      <Progress theme="warning" now={20} key={2} />
      <Progress striped theme="danger" now={10} key={3} />
    </Progress>
  );
};
export const Stacked = StackedTemplate.bind({});
