import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Card from ".";
import CardImage from "../../assets/Images/Card.svg";

export default {
  title: "Card",
  component: Card,
} as Meta<typeof Card>;

const DefaultTemplate: StoryFn<typeof Card> = (args) => (
  <Card {...args}>
    <Card.Header>Header</Card.Header>
    <Card.Image direction="top" src={CardImage} />
    <Card.Body title="Card Title" titleClassName="h5" subTitle="Card Subtitle">
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
    <Card.Footer>2 days ago</Card.Footer>
  </Card>
);
export const Default = DefaultTemplate.bind({});
Default.args = {};

const OverLayTemplate: StoryFn<typeof Card> = () => (
  <Card overLay text="white">
    <Card.Image direction="top" src={CardImage} />
    <Card.Body title="Card Title" titleClassName="h5" subTitle="Card Subtitle">
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
);
export const OverLay = OverLayTemplate.bind({});
