import React from 'react';
import { shallow } from 'enzyme';
import { MoviePlay } from '../../../src/features/sources/MoviePlay';

describe('sources/MoviePlay', () => {
  it('renders node with correct class name', () => {
    const props = {
      sources: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <MoviePlay {...props} />
    );

    expect(
      renderedComponent.find('.sources-movie-play').length
    ).toBe(1);
  });
});
