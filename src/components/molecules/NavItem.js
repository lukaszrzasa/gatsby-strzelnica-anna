import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components';
import Icon from '../atoms/Icon'
import { H4 } from '../atoms/Heading'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  text-align: center;
  width: 100%;
  display: none;
  
  ${({theme}) => theme.mediaQuery.mobile} {
    display: block;
  }
`;

const Text = styled(H4)`
  text-align: center;
  width: 100%;
`;


const NavItem = ({icon, text, url}) => {
  return (
    <Wrapper data-testid="url" as={Link} to={url}>
      <IconWrapper>
        <Icon icon={icon}/>
      </IconWrapper>
      <Text>{text}</Text>
    </Wrapper>
  )
}

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default NavItem