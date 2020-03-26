import React from 'react'
import { render } from '@testing-library/react'
import CardListItem from './CardListItem';
import theme from '../../theme/theme'
import { ThemeProvider } from 'styled-components'
import { registerIcons } from '../../core/registerIcons'

registerIcons();

describe('Card list item', () => {

  it('Should renders without errors', () => {
    const icon = 'times';
    const name = 'some text';
    const { getByTestId } = render(<ThemeProvider theme={theme}>
      <CardListItem
        icon={icon}
        name={name}
      />
    </ThemeProvider>);
    expect( getByTestId('icon') ).toBeInTheDocument();
    expect( getByTestId('list-item-name') ).toBeInTheDocument();
  })
})