import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { HeadingPage, HeadingSection } from '../atoms/Heading'
import Color from '../atoms/Color'

const Wrapper = styled.div`
  text-align: center;
`;
const BorderSeparation = styled.div`
  border-bottom: solid 6px ${({theme}) => theme.color.dark};
  width: 120px;
  margin: 0 auto;
`;


const PageHeading = ({title, subtitle}) => {
  return (
    <Wrapper data-testid="page-heading-wrapper">
      <HeadingPage data-testid="heading">{title}</HeadingPage>
      <BorderSeparation/>
      {subtitle && <HeadingSection data-testid="heading">
        <Color color="grey">{subtitle}</Color>
      </HeadingSection>}
    </Wrapper>
  )
}

PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default PageHeading