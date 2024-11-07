import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import { describe, it, expect } from 'vitest';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Hello Vitest';
    const wrapper = mount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toContain(msg);
  });
});
