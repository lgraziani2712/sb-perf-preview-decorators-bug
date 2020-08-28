import React from "react";
import { useParameter } from "@storybook/addons";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story) => {
      const props = useParameter("instance", {});

      return <Story />;
    },
  ],
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
