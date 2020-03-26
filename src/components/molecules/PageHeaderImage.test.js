import React from 'react'
import { render } from '@testing-library/react'
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
    // TODO: expect( getByTestId('svg-image') ).toBeInTheDocument();
  })
})