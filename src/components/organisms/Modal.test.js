import React, { useRef } from 'react'
import { render, fireEvent } from '@testing-library/react'
import Modal from './Modal';
import useModal from '../../hooks/useModal'
import useDetectOutsideClick from '../../hooks/useDetectOutlideClick'
import theme from '../../theme/theme'
import { ThemeProvider } from 'styled-components'
import { registerIcons } from '../../core/registerIcons'
import { renderHook, act } from '@testing-library/react-hooks'

registerIcons();

const renderComponent = () => {
  const { result:modal } = renderHook(() => useModal(true));
  const { result:ref } = renderHook(() => useRef(null));
  const close = jest.fn(() => act(() => modal.current.close()));
  const open = jest.fn(() => act(() => modal.current.open()));
  renderHook(() => useDetectOutsideClick(ref.current, close));

  const node = render(<ThemeProvider theme={theme}>
    <Modal innerRef={ref.current} close={close} isVisible={modal.current.isVisible}>
      <h3>Heading</h3>
      <p>Body</p>
    </Modal>
  </ThemeProvider>);

  const outer = node.getByTestId('modal-outer');
  const wrapper = node.getByTestId('modal-wrapper');
  const body = node.getByTestId('modal-body-wrapper');
  const times = node.getByTestId('modal-times');

  return {
    ...node,
    modal,
    close,
    open,
    outer,
    wrapper,
    body,
    times,
  };
};

const leftClick = { button: 1 };

describe('Modal component', () => {

  it('Should render without errors', () => {
    const { outer, wrapper, body, times, } = renderComponent();
    expect( outer ).toBeInTheDocument();
    expect( wrapper ).toBeInTheDocument();
    expect( body ).toBeInTheDocument();
    expect( times ).toBeInTheDocument();
  });

  it('Should close the modal', async() => {
    const { body, times, modal, close } = renderComponent();
    expect( modal.current.isVisible ).toBeTruthy();
    fireEvent.click(body, leftClick);
    expect( modal.current.isVisible ).toBeTruthy();
    fireEvent.click(times, leftClick);
    expect( close ).toHaveBeenCalled();
    expect( modal.current.isVisible ).toBeFalsy();
  });

  it('Should toggle visibility using hook methods', () => {
    const { close, open, modal } = renderComponent();
    close();
    expect( modal.current.isVisible ).toBeFalsy();
    open();
    expect( modal.current.isVisible ).toBeTruthy();
  });

  it('Should detect outside click', () => {
    const { modal, outer } = renderComponent();
    expect( modal.current.isVisible ).toBeTruthy();
    fireEvent.mouseDown( outer, leftClick );
    expect( modal.current.isVisible ).toBeFalsy();
  })

});