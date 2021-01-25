import React from 'react'

import { Button } from '../components/Button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }, // controls > backgroundColor name
  },
}

const Template = (args) => <Button {...args} />

// Primary — List of Name under Example > Button
export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary', // controls > variant placeholder
  children: 'Button', // controls > children placeholder
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}

export const Tiny = Template.bind({})
Tiny.args = {
  variant: 'tiny', // controls > variant placeholder
  children: 'Button', // controls > children placeholder
}
