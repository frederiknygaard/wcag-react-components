import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Breadcrumb } from './Breadcrumb'

export default {
  title: 'features/Breadcrumb',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />

export const Default = Template.bind({})
Default.args = {
  ariaLabel: 'Breadcrumb',
  items: [
    {
      children: 'Breadcrumb item #1',
      href: '#',
    },
    {
      children: 'Breadcrumb item #2',
      href: '#',
    },
    {
      children: 'Breadcrumb item #3',
      href: '#',
    },
  ],
}
