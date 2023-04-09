import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Divider from ".";

export default {
  title: "Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>;

const HorizontalTemplate: ComponentStory<typeof Divider> = (args) => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider {...args} type="horizontal" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider {...args} type="horizontal">
        Text
      </Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
    </>
  );
};

export const Horizontal = HorizontalTemplate.bind({});
Horizontal.args = {};

const VerticalTemplate: ComponentStory<typeof Divider> = (args) => {
  return (
    <>
      <span>Text</span>
      <Divider {...args} type="vertical" />
      <a href="http://www.baidu.com">Link</a>
      <Divider {...args} type="vertical" />
      <a href="http://www.baidu.com">Link</a>
    </>
  );
};

export const Vertical = VerticalTemplate.bind({});
Vertical.args = {};
