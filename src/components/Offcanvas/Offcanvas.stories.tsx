import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Offcanvas from ".";
import Button from "../Button";

export default {
  title: "Offcanvas",
  component: Offcanvas,
} as Meta<typeof Offcanvas>;

const DefaultTemplate: StoryFn<typeof Offcanvas> = (args) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button theme="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas {...args} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton title="Offcanvas" className="h5" />
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export const Default = DefaultTemplate.bind({});
Default.args = {};
