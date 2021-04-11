import { mount } from '@vue/test-utils'
import Categories from '@/components/Categories.vue'


test('vuex using a mock store', async () => {
    const $store = {
        state: {
            categories: []
        },
        dispatch: jest.fn()
    }

    const wrapper = mount(Categories, {
        global: {
            mocks: {
                $store
            }
        },
        props: {
            categories: []
        }
    })

    await wrapper.vm.addCategory();
    expect($store.dispatch).toHaveBeenCalled()
})
