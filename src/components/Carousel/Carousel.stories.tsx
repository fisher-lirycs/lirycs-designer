import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Carousel from ".";
import Image from "../Image";
import firstSilder from "../../assets/Images/First slide.svg";
import secondSilder from "../../assets/Images/Second slide.svg";
import thirdSilder from "../../assets/Images/Third slide.svg";

export default {
  title: "Carousel",
  component: Carousel,
} as Meta<typeof Carousel>;

const DefaultTemplate: StoryFn<typeof Carousel> = (args) => (
  <Carousel {...args}>
    <Carousel.Item>
      <Image src={firstSilder} className="d-block w-100" alt="First slide" />
      <Carousel.Caption title={"First slide label"}>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={secondSilder} className="d-block w-100" alt="Second slide" />
      <Carousel.Caption title={"Second slide label"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={thirdSilder} className="d-block w-100" alt="Third slide" />
      <Carousel.Caption title={"Third slide label"}>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  defaultIndex: 0,
  slide: true,
};
