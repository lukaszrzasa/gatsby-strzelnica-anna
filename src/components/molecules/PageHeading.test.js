import React from 'react'
import PageHeading from './PageHeading';

describe('PageHeading component', () => {

  it('Should renders without error', () => {
    const title = 'The big one';
    const subtitle = 'I\'m so small';
    const { getByTestId, getAllByTestId, rerender } = render(
      <PageHeading
        title={title}
      />
    );
    expect( getByTestId('heading') ).toBeInTheDocument();
    expect( getAllByTestId('heading') ).toHaveLength(1);
    rerender(
      <PageHeading
        title={title}
        subtitle={subtitle}
      />
    );
    expect( getByTestId('heading') ).toBeInTheDocument();
    expect( getAllByTestId('heading') ).toHaveLength(2);
    expect( getByTestId('color') ).toBeInTheDocument();
  })
})