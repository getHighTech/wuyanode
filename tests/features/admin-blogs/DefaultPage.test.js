import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/admin-blogs/DefaultPage';

describe('admin-blogs/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      adminBlogs: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.admin-blogs-default-page').length
    ).toBe(1);
  });
});
