import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Fade from ".";
import Button from "../Button";

export default {
  title: "Fade",
  component: Fade,
} as Meta<typeof Fade>;

const DefaultTemplate: StoryFn<typeof Fade> = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>Fade</Button>
      <Fade fadein={open} timeout={300}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
      </Fade>
    </div>
  );
};

export const Default = DefaultTemplate.bind({});
