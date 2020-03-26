import React from 'react'
import { render } from '@testing-library/react'
import TrainingOfferItem from './TrainingOfferItem';
import theme, { color } from '../../theme/theme';
import { ThemeProvider } from 'styled-components'
import { registerIcons } from '../../core/registerIcons'

registerIcons();

describe('TrainingOfferItem component', () => {

  it('Should renders without errors', () => {
    const stars = 3;
    const variant = 'violet';
    const title = 'Title';
    const description = 'This is very long description';
    const price = 200;
    const { getAllByTestId, getByTestId } = render(<ThemeProvider theme={theme}>
      <TrainingOfferItem
        stars={stars}
        variant={variant}
        title={title}
        description={description}
        price={price}
      >
        <div data-testid="children">body</div>
      </TrainingOfferItem>
    </ThemeProvider>);
    //
    expect( getByTestId('training-offer-item-wrapper') ).toBeInTheDocument();
    expect( getByTestId('children') ).toBeInTheDocument();
    expect( getByTestId('heading') ).toBeInTheDocument();
    expect( getByTestId('price') ).toHaveStyle(`color: ${color.violet}`);
    expect( getByTestId('training-title') ).toBeInTheDocument();
    expect( getByTestId('training-description') ).toBeInTheDocument();
    expect( getAllByTestId('icon') ).toHaveLength(3);
  })
})