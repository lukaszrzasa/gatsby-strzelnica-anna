import React from "react"
import Modal from './Modal';
import useModal from '../../hooks/useModal';
import { fireEvent } from "@testing-library/react"


const renderComponent = () => {
  const { isVisible, open, close } = useModal(true);

  const node = render(<Modal close={close} isVisible={isVisible}>
    <h3>Heading</h3>
    <p>Body</p>
  </Modal>);

  const times = node.getByTestId('modal-times');
  const wrapper = node.getByTestId('modal-wrapper');
  const body = node.getByTestId('modal-body');

  return {
    ...node,
    times,
    wrapper,
    body,
    modal: {
      isVisible,
      open,
      close
    },
  };
};

describe('Modal component', () => {

  it('Should render without errors', () => {
    const { wrapper, times, body } = renderComponent();
    expect( wrapper ).toBeInTheDocument();
    expect( body ).toBeInTheDocument();
    expect( times ).toBeInTheDocument();
  });

  it('Should close the modal after click at times button', () => {
    const { wrapper, body, times, modal: { isVisible } } = renderComponent();
    expect( isVisible ).toBeTruthy();
    fireEvent.click(body);
    expect( isVisible ).toBeTruthy();
    expect( wrapper ).not.toHaveStyle('display: none;');
    fireEvent.click(times);
    expect( isVisible ).toBeFalsy();
    expect( wrapper ).toHaveStyle('display: none;');
  });

  it('Should toggle visibility with open and close hooks', () => {
    const { wrapper, modal: { isVisible, open, close } } = renderComponent();
    close();
    expect( isVisible ).toBeFalsy();
    expect( wrapper ).toHaveStyle('display: none;');
    open();
    expect( isVisible ).toBeTruthy();
    expect( wrapper ).not.toHaveStyle('display: none;');
  });

});