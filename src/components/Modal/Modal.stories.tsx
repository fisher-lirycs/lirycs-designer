import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Modal from ".";
import Button from "../Button";

export default {
  title: "Modal",
  component: Modal,
} as Meta<typeof Modal>;

const DefaultTemplate: StoryFn<typeof Modal> = (args) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button theme="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal {...args} show={show} onHide={handleClose}>
        <Modal.Header title="Modal heading" titleClassName="h4" />
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button theme="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button theme="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const Default = DefaultTemplate.bind({});
Default.args = {};

const DialogTemplate: StoryFn<typeof Modal> = (args) => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header title="Modal title" />
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button theme="secondary">Close</Button>
          <Button theme="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export const Dialog = DialogTemplate.bind({});
Dialog.args = {};
