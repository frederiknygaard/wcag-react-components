import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Accordion } from "./Accordion";

export default {
  title: "features/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args}>
    <Accordion.Item label="Åben den her mand">Hej</Accordion.Item>
    <Accordion.Item label="Nej den her mand!">Hej</Accordion.Item>
    <Accordion.Item label="Hvad snakker du om!">Hej</Accordion.Item>
  </Accordion>
);

export const Default = Template.bind({});
Default.args = {
  title: "Hej",
};
