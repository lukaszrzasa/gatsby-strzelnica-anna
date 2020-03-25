import React from 'react'
import TrainingOfferItem from './TrainingOfferItem';
import { colors } from '../../theme/theme';

describe('TrainingOfferItem component', () => {

  it('Should renders without errors', () => {
    const stars = 3;
    const variant = 'violet';
    const title = 'Title';
    const description = 'This is very long description';
    const price = 200;
    const { getAllByTestId, getByTestId, getByText } = render(<TrainingOfferItem
        stars={stars}
        variant={variant}
        title={title}
        description={description}
        price={price}
      >
      <div data-testid="children">body</div>
    </TrainingOfferItem>);
    //
    expect( getByTestId('training-offer-item-wrapper') ).toBeInTheDocument();
    expect( getByTestId('children') ).toBeInTheDocument();
    expect( getByTestId('heading') ).toBeInTheDocument();
    expect( getByTestId('color') ).toBeInTheDocument();
    expect( getByTestId('paragraph') ).toBeInTheDocument();
    expect( getByTestId('price') ).toHaveStyle(`color: ${colors.violet}`);
    expect( getByText(title) ).toBeInTheDocument();
    expect( getByText(description) ).toBeInTheDocument();
    expect( getAllByTestId('icon') ).toHaveLength(3);
  })
})