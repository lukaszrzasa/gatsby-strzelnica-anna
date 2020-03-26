import React from 'react';
import { render } from '@testing-library/react'
import SkewSection from './SkewSection';
import theme from '../../theme/theme'
import { ThemeProvider } from 'styled-components'

describe('SkewSection component', () => {

  it('Should renders without error', () => {
    const { getByTestId } = render(<ThemeProvider theme={theme}>
      <SkewSection>
        <div data-testid="test-children">Test</div>
      </SkewSection>
    </ThemeProvider>);
    // TODO: expect( getByTestId('image-svg') ).toBeInTheDocument();
    expect( getByTestId('test-children') ).toBeInTheDocument();
  });

})