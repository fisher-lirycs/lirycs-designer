import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Accordion from ".";

export default {
  title: "Accordion",
  component: Accordion,
} as Meta<typeof Accordion>;

const DefaultTemplate: StoryFn<typeof Accordion> = (args) => {
  return (
    <Accordion {...args}>
      <Accordion.Item eventKey="0" header="Accordion Item #1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Accordion.Item>
      <Accordion.Item eventKey="1" header="Accordion Item #2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Accordion.Item>
      <Accordion.Item eventKey="2" header="Accordion Item #3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Accordion.Item>
    </Accordion>
  );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
  flush: false,
  alwaysOpen: false,
  defaultActiveKey: "0",
};
