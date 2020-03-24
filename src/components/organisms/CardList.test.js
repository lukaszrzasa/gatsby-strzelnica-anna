import React from 'react'
import CardList from './CardList';

const headerProps = {
  title: 'Test',
  subtitle: '120zł'
}

const itemsProps = ['a', 'b', 'c', 'd'].map(e=>({
  icon: 'times',
  text: e,
}));

describe('CardList component', () => {

  it('Should renders without errors', () => {
    const { getAllByTestId, getByTestId } = render(<CardList
      header={headerProps}
      items={itemsProps}
    />);
    const allItems = getAllByTestId('card-list-item');
    const header = getByTestId('card-list-header');
    expect( header ).toBeInTheDocument();
    expect( allItems ).toHaveLength(4);
    expect( getAllByTestId('icon') ).toHaveLength(4);
  });

})