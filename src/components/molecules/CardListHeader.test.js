import React from 'react'
import CardListHeader from './CardListHeader';

describe('CardListHeader', () => {

  it('Should renders properly', () => {
    const left = 'Some text';
    const right = 'Another';
    const { getByText } = render(
      <CardListHeader
        left={left}
        right={right}
      />
    );
    expect( getByText(left) ).toBeInTheDocument();
    expect( getByText(right) ).toBeInTheDocument();
  })
})