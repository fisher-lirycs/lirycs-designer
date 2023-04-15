import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Breadcrumb from ".";
import Icon from "../Icon";

export default {
  title: "Breadcrumb",
  component: Breadcrumb,
} as Meta<typeof Breadcrumb>;

const DefaultTemplate: StoryFn<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  items: [
    {
      title: "Home",
    },
    {
      title: <a href="https://www.baidu.com">Application Center</a>,
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
