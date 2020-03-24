import React from 'react'
import NavItem from './NavItem';

describe('NavItem component', () => {

  it('Should renders without errors', () => {
    const icon = 'times';//TODO
    const text = 'Item';
    const url = 'https://google.com';
    const { getByTestId, getByText } = render(
      <NavItem
        icon={icon}
        text={text}
        url={url}
      />
    );
    expect( getByTestId('icon') ).toBeInTheDocument();
    expect( getByText(text) ).toBeInTheDocument();
    expect( getByTestId('url') ).toBeInTheDocument();
  })
})