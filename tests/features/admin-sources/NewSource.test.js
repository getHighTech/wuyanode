import React from 'react';
import { shallow } from 'enzyme';
import { NewSource } from '../../../src/features/admin-sources/NewSource';

describe('admin-sources/NewSource', () => {
  it('renders node with correct class name', () => {
    const props = {
      adminSources: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <NewSource {...props} />
    );

    expect(
      renderedComponent.find('.admin-sources-new-source').length
    ).toBe(1);
  });
});
