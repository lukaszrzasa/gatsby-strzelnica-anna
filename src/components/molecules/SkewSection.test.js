import React from 'react';
import SkewSection from './SkewSection';

describe('SkewSection component', () => {

  it('Should renders without error', () => {
    const { getByTestId } = render(<SkewSection>
      <div data-testid="children">Test</div>
    </SkewSection>);
    expect( getByTestId('image-svg') ).toBeInTheDocument();
    expect( getByTestId('children') ).toBeInTheDocument();
  });

})