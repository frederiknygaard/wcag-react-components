import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SkipToMain } from './SkipToMain'

export default {
  title: 'features/SkipToMain',
  component: SkipToMain,
} as ComponentMeta<typeof SkipToMain>

const Template: ComponentStory<typeof SkipToMain> = (args) => (
  <div>
    <SkipToMain {...args} />
    <main id="main">This is the main content. Tab through the website to focus the "skip to main" element</main>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  text: 'Skip to main content',
}
