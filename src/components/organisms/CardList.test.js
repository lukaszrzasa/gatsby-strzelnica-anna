import React from 'react'
import { render } from '@testing-library/react'
import CardList from './CardList';
import theme from '../../theme/theme'
import { ThemeProvider } from 'styled-components'
import { registerIcons } from '../../core/registerIcons'

registerIcons();

const headerProps = {
  title: 'Test',
  subtitle: '120zł'
}

const itemsProps = ['a', 'b', 'c', 'd'].map(e=>({
  icon: 'times',
  name: e,
}));

describe('CardList component', () => {

  it('Should renders without errors', () => {
    const { getAllByTestId, getByTestId } = render(<ThemeProvider theme={theme}>
      <CardList
        header={headerProps}
        items={itemsProps}
      />
    </ThemeProvider>);
    const allItems = getAllByTestId('card-list-item');
    const header = getByTestId('card-list-header');
    expect( header ).toBeInTheDocument();
    expect( allItems ).toHaveLength(4);
    expect( getAllByTestId('icon') ).toHaveLength(4);
  });

})