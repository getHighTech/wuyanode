import React from 'react';
import { shallow } from 'enzyme';
import { SourceForm } from '../../../src/features/admin-sources';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<SourceForm />);
  expect(renderedComponent.find('.admin-sources-source-form').length).toBe(1);
});
