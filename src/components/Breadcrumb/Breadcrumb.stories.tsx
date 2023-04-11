import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Breadcrumb from ".";
import Icon from "../Icon";

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
      title: (
        <>
          <Icon name={"IconArrowDownRight"} />
          <span>Application List</span>
        </>
      ),
      href: "https://www.baidu.com",
    },
    {
      title: <Icon name={"IconTrello"} />,
      href: "https://www.baidu.com",
    },
    {
      title: "An Application",
    },
  ],
};
