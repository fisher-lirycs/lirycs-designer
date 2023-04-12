import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Collapse from ".";
import Button from "../Button";

export default {
  title: "Collapse",
  component: Collapse,
} as ComponentMeta<typeof Collapse>;

const DefaultTemplate: ComponentStory<typeof Collapse> = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>Collapse</Button>
      <Collapse collapsein={open} timeout={300}>
        <div>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </div>
  );
};

export const Default = DefaultTemplate.bind({});
