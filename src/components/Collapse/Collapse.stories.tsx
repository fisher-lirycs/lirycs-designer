import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Collapse from ".";
import Button from "../Button";

export default {
  title: "Collapse",
  component: Collapse,
} as Meta<typeof Collapse>;

const DefaultTemplate: StoryFn<typeof Collapse> = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>Collapse</Button>
      <Collapse collapsein={open} timeout={300}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </Collapse>
    </div>
  );
};

export const Default = DefaultTemplate.bind({});
