import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Image from ".";
import Img from "../../assets/Images/BMW-X5.png";

export default {
  title: "Image",
  component: Image,
} as Meta<typeof Image>;

const DefaultTemplate: StoryFn<typeof Image> = (args) => <Image {...args} />;

export const Default = DefaultTemplate.bind({});
Default.args = {
  fluid: true,
  src: Img,
};
