import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Breadcrumb from ".";

export default {
  title: "Breadcrumb",
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const DefaultTemplate: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  items: [
    {
      title: "Home",
    },
    {
      title: <a href="">Application Center</a>,
    },
    {
      title: <a href="">Application List</a>,
    },
    {
      title: "An Application",
    },
  ],
};
