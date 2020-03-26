import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Icon from '../atoms/Icon'

const OuterWrapper = styled.div`
  position: fixed;
  background-color: rgba(0,0,0,.3);
  width: 100%;
  height: 100%;
  z-index: 9999;
  top: 0;
  left: 0;
  display: ${({isVisible}) => isVisible ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
  z-index: 10000;
  background-color: #fff;
  overflow:auto;
  max-width: 60%;
  max-height: 70%;
  
  ${({theme}) => theme.mediaQuery.smallDesktop} {
    max-width: 80%;
    max-height: 80%;
  }
  
  ${({theme}) => theme.mediaQuery.mobile} {
    max-width: 90%;
    max-height: 90%;
  }
`;

const Times = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
`;

const BodyWrapper = styled.div`
  padding: 15px;
`;


const Modal = ({ close, innerRef, isVisible, children, ...props }) => {
  return (
    <OuterWrapper isVisible={isVisible} data-testid="modal-outer">
      <Wrapper ref={innerRef} {...props} data-testid="modal-wrapper">
        <Times data-testid="modal-times" onClick={close}>
          <Icon icon="times"/>
        </Times>
        <BodyWrapper data-testid="modal-body-wrapper">
          {children}
        </BodyWrapper>
      </Wrapper>
    </OuterWrapper>
  );
};

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  innerRef: PropTypes.object,
}

export default Modal