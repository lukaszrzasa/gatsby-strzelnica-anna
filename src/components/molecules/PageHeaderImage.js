import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Image from '../atoms/Image'

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;


const PageHeaderImage = ({image}) => {
  return (
    <Wrapper>
      <Image data={image}/>
    </Wrapper>
  )
}

PageHeaderImage.propTypes = {
  image: PropTypes.object.isRequired,
}

export default PageHeaderImage