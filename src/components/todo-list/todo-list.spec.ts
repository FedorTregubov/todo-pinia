import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import TodoList from './todo-list.vue'

describe.skip('Component TodoList', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(TodoList)
    expect(wrapper).toBeTruthy();
  })
})
