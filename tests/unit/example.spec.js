// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

import { shallowMount } from '@vue/test-utils'
import ToDoList from '@/components/ToDoList.vue'

describe('test ToDoList', () => {
    it('输入框初始值为空字符串', () => {
        const wrapper = shallowMount(ToDoList)
        expect(wrapper.vm.toDoText).toBe('')
    })
})