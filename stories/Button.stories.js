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
  color: 'white',
  variant: 'primary', // variant — button BG color
  children: 'Click Here', // children — Button Text
  label: 'Primary Button',
  padding: '8px 16px',
  margin: '0px',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'white',
  variant: 'secondary', // variant — button BG color
  children: 'Click Here', // children — Button Text
  label: 'Secondary Button',
  padding: '8px 16px',
  margin: '0px',
}

export const Large = Template.bind({})
Large.args = {
  variant: {
    preset: {
      variant: 'primary',
    },
  },
  sizes: 'large',
  label: 'Large Button',
  children: 'Click Here', // children — Button Text
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}

export const Tiny = Template.bind({})
Tiny.args = {
  variant: 'tiny', // variant — button BG color
  children: 'Button', // children — Button Text
}
