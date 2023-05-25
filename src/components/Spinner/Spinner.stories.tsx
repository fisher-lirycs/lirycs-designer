import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Spinner from ".";
import Button from "../Button";

export default {
  title: "Spinner",
  component: Spinner,
} as Meta<typeof Spinner>;

const DefaultTemplate: StoryFn<typeof Spinner> = (args) => {
  return <Spinner {...args} />;
};

export const Default = DefaultTemplate.bind({});
Default.args = {};

const SpinnerInButtonTemplate: StoryFn<typeof Spinner> = () => {
  return (
    <>
      <Button theme="primary" disabled>
        <Spinner
          animation="border"
          size="small"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{" "}
      <Button theme="primary" disabled>
        <Spinner
          animation="grow"
          size="small"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </>
  );
};

export const SpinnerInButton = SpinnerInButtonTemplate.bind({});
