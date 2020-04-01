import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components';
import Icon from '../atoms/Icon'

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  text-align: center;
  display: none;
  width: 4rem;
  font-size: 3rem;
  ${({theme}) => theme.mediaQuery.mobile} {
    display: block;
  }
`;

const Text = styled.div`
  text-align: center;
`;


const NavItem = ({icon, text, url}) => {
  return (
    <Wrapper data-testid="nav-item-wrapper">
      <StyledLink to={`/${url}`} data-testid="url">
        <IconWrapper>
          <Icon icon={icon}/>
        </IconWrapper>
        <Text data-testid="nav-item-text">
          {text}
        </Text>
      </StyledLink>
    </Wrapper>
  )
}

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default NavItem