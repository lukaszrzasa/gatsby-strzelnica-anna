import React from 'react'
import AmmoItem from './AmmoItem';

describe('AmmoItem component', () => {

  it('Should renders without errors', () => {
    const price = 2;
    const ammo = "9mm";
    const weapon = "GLOCK";
    const image = {/*TODO: gatsby image preset*/};
    const { getByText, getByTestId } = render(
      <AmmoItem
        price={price}
        ammo={ammo}
        weapon={weapon}
        image={image}
      />);

    expect( getByText(price) ).toBeInTheDocument();
    expect( getByText(ammo) ).toBeInTheDocument();
    expect( getByText(weapon) ).toBeInTheDocument();
    expect( getByTestId('image') ).toBeInTheDocument();
  })

})
