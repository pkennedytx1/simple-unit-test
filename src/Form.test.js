import React from 'react'
import { mount } from 'enzyme'

import CustomForm from './Form'

it('renders text input with placeholder of First name', () => {
    const wrapper = mount(<input name='firstName' placeholder="First name" />)
    const input = wrapper.find('input')
    expect(input.prop('name')).toEqual('firstName')
    expect(input.prop('placeholder')).toEqual('First name')
})

// it('renders text input with placeholder of Last name', () => {
//     const wrapper = mount(<input name='lastName' placeholder="Last name" />)
//     const input = wrapper.find('input')
//     expect(input.prop('name')).toEqual('lastName')
//     expect(input.prop('placeholder')).toEqual('Last name')
// })

// it('renders button with type submit', () => {
//     const wrapper = mount(<CustomForm type='submit' />)
//     const button = wrapper.find('button')
//     expect(button.prop('type')).toEqual('submit')
// })

it('firstName state will update to "Anakin" when the input changes', () => {
    const wrapper = mount(<CustomForm />)
    wrapper.find('input[name="firstName"]').simulate('change', {target: { name: 'firstName', value: 'Anakin'}})
    expect(wrapper.state('firstName')).toEqual('Anakin')
})

// it('lastName state will update to "Skywalker" when the input changes', () => {
//     const wrapper = mount(<CustomForm />)
//     wrapper.find('input[name="lastName"]').simulate('change', {target: { name: 'lastName', value: 'Skywalker'}})
//     expect(wrapper.state('lastName')).toEqual('Skywalker')
// })

// it('will compile the first and last name on submit to state of full name', () => {
//     const wrapper = mount(<CustomForm />)
//     wrapper.find('input[name="lastName"]').simulate('change', {target: { name: 'lastName', value: 'Skywalker'}})
//     wrapper.find('input[name="firstName"]').simulate('change', {target: { name: 'firstName', value: 'Anakin'}})
//     wrapper.find('button[type="submit"]').simulate('submit')
//     expect(wrapper.state('fullName')).toEqual('Anakin Skywalker')
// })

// it('save the state of full name as "Anakin Skywalker" even if the input is "anakin skywalker"', () => {
//     const wrapper = mount(<CustomForm />)
//     wrapper.find('input[name="lastName"]').simulate('change', {target: { name: 'lastName', value: 'skywalker'}})
//     wrapper.find('input[name="firstName"]').simulate('change', {target: { name: 'firstName', value: 'anakin'}})
//     wrapper.find('button[type="submit"]').simulate('submit')
//     expect(wrapper.state('fullName')).toEqual('Anakin Skywalker')
// })
