import React from 'react';
import { shallow } from 'enzyme';
import { Show } from '../../../src/features/sources/Show';

describe('sources/Show', () => {
  it('renders node with correct class name', () => {
    const props = {
      sources: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Show {...props} />
    );

    expect(
      renderedComponent.find('.sources-show').length
    ).toBe(1);
  });
});
