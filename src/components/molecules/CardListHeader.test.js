import React from 'react'
import CardListHeader from './CardListHeader';

describe('CardListHeader', () => {

  it('Should renders properly', () => {
    const title = 'Some text';
    const subtitle = 'Another';
    const { getByText } = render(
      <CardListHeader
        title={title}
        subtitle={subtitle}
      />
    );
    expect( getByText(title) ).toBeInTheDocument();
    expect( getByText(subtitle) ).toBeInTheDocument();
  })
})