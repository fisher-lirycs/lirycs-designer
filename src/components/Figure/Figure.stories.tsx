import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Figure from ".";
import FigureImage from "../../assets/Images/Figure.svg";

export default {
  title: "Figure",
  component: Figure,
} as Meta<typeof Figure>;

const DefaultTemplate: StoryFn<typeof Figure> = (args) => (
  <Figure {...args}>
    <Figure.Image width={171} height={180} alt="171x180" src={FigureImage} />
    <Figure.Caption>
      Nulla vitae elit libero, a pharetra augue mollis interdum.
    </Figure.Caption>
  </Figure>
);

export const Default = DefaultTemplate.bind({});
Default.args = {};
