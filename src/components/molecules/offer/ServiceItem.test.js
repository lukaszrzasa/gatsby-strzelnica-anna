import React from 'react';
import { render } from '@testing-library/react'
import ServiceItem from './ServiceItem';
import { ThemeProvider } from 'styled-components'
import theme from '../../../theme/theme'

describe('ServiceItem component', () => {

  it('Should renders without errors', () => {
    const name = 'Test';
    const description = 'some description';
    const priceStr = '2zł / osoba';
    const promo = '50% przy minimum 5 osobach';
    const { getByTestId } = render(<ThemeProvider theme={theme}>
      <ServiceItem
        name={name}
        description={description}
        priceStr={priceStr}
        promo={promo}
      />
    </ThemeProvider>);
    expect( getByTestId('service-name') ).toBeInTheDocument();
    expect( getByTestId('service-price') ).toBeInTheDocument();
    expect( getByTestId('service-promo') ).toBeInTheDocument();
  })

})
