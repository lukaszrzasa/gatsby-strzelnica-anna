import React from 'react'
import CardListItem from './CardListItem';

describe('Card list item', () => {

  it('Should renders without errors', () => {
    const icon = 'times';
    const name = 'some text';
    const { getByTestId, getByText } = render(
      <CardListItem
        icon={icon}
        name={name}
      />
    );
    expect( getByTestId('icon') ).toBeInTheDocument();
    expect( getByText(name) ).toBeInTheDocument();
  })
})