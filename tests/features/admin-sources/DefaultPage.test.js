import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/admin-sources/DefaultPage';

describe('admin-sources/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      adminSources: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.admin-sources-default-page').length
    ).toBe(1);
  });
});
