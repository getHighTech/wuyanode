import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/sources/DefaultPage';

describe('sources/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      sources: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.sources-default-page').length
    ).toBe(1);
  });
});
