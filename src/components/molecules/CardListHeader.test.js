import React from 'react'
import { render } from '@testing-library/react'
import CardListHeader from './CardListHeader';
import theme from '../../theme/theme'
import { ThemeProvider } from 'styled-components'

describe('CardListHeader', () => {

  it('Should renders properly', () => {
    const title = 'Some text';
    const subtitle = 'Another';
    const { getByTestId } = render(<ThemeProvider theme={theme}>
      <CardListHeader
        title={title}
        subtitle={subtitle}
      />
    </ThemeProvider>);
    expect( getByTestId('title') ).toBeInTheDocument();
    expect( getByTestId('subtitle') ).toBeInTheDocument();
  })
})