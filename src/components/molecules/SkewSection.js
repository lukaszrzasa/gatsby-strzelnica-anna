import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Wrapper = styled.div`
  
`;

const BodyWrapper = styled.div`
  background-color: ${({theme}) => theme.color.grey};
`


const SkewSection = ({children}) => {
  return (
    <Wrapper>
      {/*TODO: image*/}
      <BodyWrapper data-testid="children">
        {children}
      </BodyWrapper>
      {/*TODO: image*/}
    </Wrapper>
  )
}

SkewSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SkewSection