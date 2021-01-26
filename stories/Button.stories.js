import React from 'react'

import { Button } from '../components/Button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    label: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
    variant: {
      control: {
        type: 'inline-radio',
        options: ['primary', 'secondary'], // variant — button BG color
      },
    },
    backgroundColor: { control: 'color' }, // controls > backgroundColor name
    color: { control: 'color' }, // controls > backgroundColor name
    padding: {
      control: { type: 'range', min: 0, max: 50, step: 1 },
    },
    margin: {
      control: { type: 'range', min: 0, max: 8, step: 1 },
    },
  },
}

const Template = (args) => <Button {...args} />

// Primary — List of Name under Example > Button
export const Primary = Template.bind({})
Primary.args = {
  backgroundColor: 'Background Color',
  color: 'Text Color',
  variant: 'primary',
  children: 'Click Here', // children — Button Text
  label: 'Primary Button',
  padding: 12,
  margin: 0,
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'white',
  variant: 'secondary', // variant — button BG color
  children: 'Click Here', // children — Button Text
  label: 'Secondary Button',
  padding: 10,
  margin: 0,
}
