import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../../src/features/common/Login';

describe('common/Login', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Login {...props} />
    );

    expect(
      renderedComponent.find('.common-login').length
    ).toBe(1);
  });
});
