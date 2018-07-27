import React from 'react';
import { shallow } from 'enzyme';
import { New } from '../../../src/features/admin-blogs/New';

describe('admin-blogs/New', () => {
  it('renders node with correct class name', () => {
    const props = {
      adminBlogs: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <New {...props} />
    );

    expect(
      renderedComponent.find('.admin-blogs-new').length
    ).toBe(1);
  });
});
