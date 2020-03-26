import React from 'react'
import { render } from '@testing-library/react'
import NavItem from './NavItem';
import theme from '../../theme/theme'
import { ThemeProvider } from 'styled-components'
import { registerIcons } from '../../core/registerIcons'

registerIcons();

describe('NavItem component', () => {

  it('Should renders without errors', () => {
    const icon = 'times';//TODO
    const text = 'Item';
    const url = 'https://google.com';
    const { getByTestId } = render(<ThemeProvider theme={theme}>
      <NavItem
        icon={icon}
        text={text}
        url={url}
      />
    </ThemeProvider>);
    expect( getByTestId('icon') ).toBeInTheDocument();
    expect( getByTestId('nav-item-text') ).toBeInTheDocument();
    expect( getByTestId('url') ).toBeInTheDocument();
  })
})