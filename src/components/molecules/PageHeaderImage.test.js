import React from 'react'
import PageHeaderImage from './PageHeaderImage';

describe('PageHeaderImage component', () => {

  it('Should renders without error', () => {
    const image = {/*TODO: gatsby image*/};
    const { getByTestId } = render(
      <PageHeaderImage
        image={image}
      />
    );
    expect( getByTestId('image') ).toBeInTheDocument();
    expect( getByTestId('svg-image') ).toBeInTheDocument();
  })
})