import React from 'react'
import { render } from '@testing-library/react'
import PageHeading from './PageHeading';
import theme from '../../theme/theme'
import { ThemeProvider } from 'styled-components'

describe('PageHeading component', () => {

  it('Should renders without error', () => {
    const title = 'The big one';
    const subtitle = 'I\'m so small';
    const { getByTestId, getAllByTestId, rerender } = render(<ThemeProvider theme={theme}>
      <PageHeading
        title={title}
      />
    </ThemeProvider>);
    expect( getAllByTestId('heading') ).toHaveLength(1);
    rerender(<ThemeProvider theme={theme}>
      <PageHeading
        title={title}
        subtitle={subtitle}
      />
    </ThemeProvider>);
    expect( getAllByTestId('heading') ).toHaveLength(2);
  })
})