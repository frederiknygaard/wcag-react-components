import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Accordion } from './Accordion'

export default {
  title: 'features/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args}>
    <Accordion.Item label="Accordion item #1">This is content</Accordion.Item>
    <Accordion.Item label="Accordion item #2">This is content</Accordion.Item>
    <Accordion.Item label="Accordion item #3">This is content</Accordion.Item>
  </Accordion>
)

export const Default = Template.bind({})
Default.args = {}
