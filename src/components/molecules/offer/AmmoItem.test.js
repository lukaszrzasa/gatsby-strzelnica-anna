import React from 'react'
import { render } from '@testing-library/react'
import AmmoItem from './AmmoItem';

describe('AmmoItem component', () => {

  it('Should renders without errors', () => {
    const price = 2;
    const weaponPrice = 2;
    const ammo = "9mm";
    const weapon = "GLOCK";
    const image = {/*TODO: gatsby image preset*/};
    const { getByTestId } = render(
      <AmmoItem
        price={price}
        ammo={ammo}
        weapon={weapon}
        image={image}
        weaponPrice={weaponPrice}
      />);

    expect( getByTestId('ammo-price') ).toBeInTheDocument();
    expect( getByTestId('ammo-name') ).toBeInTheDocument();
    expect( getByTestId('ammo-name') ).toBeInTheDocument();
    expect( getByTestId('image') ).toBeInTheDocument();
  })

})
