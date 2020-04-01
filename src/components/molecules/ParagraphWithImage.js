import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Paragraph from '../atoms/Paragraph'
import Image from '../atoms/Image'

const Wrapper = styled.div`
  display: flex;
  > div, p {
    width: 50%;
    padding: 0 1.5rem;
  }  
`


const ParagraphWithImage = ({text, image}) => {
  return (
    <Wrapper>
      <Paragraph>
        {text}
      </Paragraph>
      <div>
        <Image fluid={image}/>
      </div>
    </Wrapper>
  )
}

ParagraphWithImage.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default ParagraphWithImage