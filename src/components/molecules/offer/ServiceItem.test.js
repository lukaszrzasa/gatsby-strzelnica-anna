import React from 'react';
import ServiceItem from './ServiceItem';

describe('ServiceItem component', () => {

  it('Should renders without errors', () => {
    const name = 'Test';
    const description = 'some description';
    const priceStr = '2zł / osoba';
    const promo = '50% przy minimum 5 osobach';
    const { getByTestId, getByText } = render(
      <ServiceItem
        name={name}
        description={description}
        priceStr={priceStr}
        promo={promo}
      />);
    expect( getByText(name) ).toBeInTheDocument();
    expect( getByText(description) ).toBeInTheDocument();
    expect( getByText(price) ).toBeInTheDocument();
    expect( getByText(promo) ).toBeInTheDocument();
  })

})
