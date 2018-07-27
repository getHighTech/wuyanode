import React from 'react';
import { shallow } from 'enzyme';
import { LangSelector } from '../../../src/features/admin-sources/LangSelector';

describe('admin-sources/LangSelector', () => {
  it('renders node with correct class name', () => {
    const props = {
      adminSources: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LangSelector {...props} />
    );

    expect(
      renderedComponent.find('.admin-sources-lang-selector').length
    ).toBe(1);
  });
});
