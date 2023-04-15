import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Icon } from ".";
import { Icons, IconTypes } from "../../constants/Icon";

export default {
  title: "Icon",
  component: Icon,
} as Meta<typeof Icon>;

const DefaultTemplate: StoryFn<typeof Icon> = (args) => <Icon {...args} />;
export const Default = DefaultTemplate.bind({});
Default.args = {
  name: "Icon0CircleFill",
};

const AllTemplate: StoryFn<typeof Icon> = () => (
  <>
    {Object.keys(Icons).map((key, index) => (
      <span key={index} style={{ margin: "10px" }}>
        <Icon name={key as IconTypes} width={20} height={20} />
      </span>
    ))}
  </>
);
export const All = AllTemplate.bind({});
