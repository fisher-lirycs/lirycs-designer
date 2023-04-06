import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icon } from ".";
import { Icons, IconTypes } from "../../constants/Icon";

export default {
  title: "Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const DefaultTemplate: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args} />
);
export const Default = DefaultTemplate.bind({});
Default.args = {
  name: "Icon0CircleFill",
};

const AllTemplate: ComponentStory<typeof Icon> = () => (
  <>
    {Object.keys(Icons).map((key, index) => (
      <span key={index} style={{ margin: "10px" }}>
        <Icon name={key as IconTypes} width={20} height={20} />
      </span>
    ))}
  </>
);
export const All = AllTemplate.bind({});
