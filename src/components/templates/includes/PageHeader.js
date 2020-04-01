import React, { useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import navItems from './navItems'
import NavItem from '../../molecules/NavItem'
import Container from '../../atoms/Container'
import { Link } from 'gatsby';
import Icon from '../../atoms/Icon'


const Wrapper = styled.header`
  position: relative;
  width: 100%;
  ${({theme}) => theme.mediaQuery.mobile} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 6rem;
    ${({isNavVisible}) => isNavVisible && css`
      height: 100vh;
`   }
  }
`;

const LogosWrapper = styled.div`
  background-color: #fff;
  > div {
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div {
      width: 33.3333333%;
    }
  }
  ${({theme}) => theme.mediaQuery.mobile} {
    background-color: #333;
    color: #fff;
    > div {
      height: 6rem;
    }
  }
`;

const OwnerLogo = styled.div`
  ${({theme}) => theme.mediaQuery.mobile} {
    display: none;
  }
`;

const Logo = styled.div`
  text-align: center;
  ${({theme}) => theme.mediaQuery.mobile} {
    text-align: left;
    padding-left: 2rem;
  }
`;

const Socials = styled.div`
  text-align: right;
  font-size: 4rem;
  a {
    margin: 0 1rem;
  }
  ${({theme}) => theme.mediaQuery.mobile} {
    display: none;
  }
`;

const NavWrapper = styled.nav`
  height: 6rem;
  width: 100%;
  left: 0;
  background-color: #eee;
  ol {
    margin: 0 0 0 -2rem;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    li a {
      height: 6rem;
      padding: 0 2rem;
      line-height: 6rem;
      font-size: 1.6rem;
      font-weight: 500;
      text-decoration: none;
      color: #000;
    }
  }
  overflow: auto;
  ${({theme}) => theme.mediaQuery.mobile} {
    height: 0;
    transition: height .3s;
    ${({isNavVisible}) => isNavVisible && css`
      height: calc(100vh - 6rem);
`   }
    ol {
      flex-direction: column;
      a {
        font-size: 3rem; 
        height: 13rem;
        width: 100%;
      }
    }
  }
`;

const ToggleMenu = styled.div`
  display: none;
  text-align: right;
  padding-right: 2rem;
  font-size: 3rem;
  > div {
    display: inline-block;
    margin: 0 auto;
    cursor: pointer;
  }
  ${({theme}) => theme.mediaQuery.mobile} {
    display: block;
  }
`;


const PageHeader = () => {

  const stickyNav = useRef(null);
  const [ isNavVisible, setIsNavVisible ] = useState(false);

  const handleClick = () => setIsNavVisible(!isNavVisible);

  return (
    <Wrapper ref={stickyNav} isNavVisible={isNavVisible}>
      <LogosWrapper>
        <Container>
          <OwnerLogo>Str</OwnerLogo>
          <Logo>logo</Logo>
          <Socials>
            <Link to={'/'}><Icon style={{color: '#f60000'}} icon={['fab', 'youtube']}/></Link>
            <Link to={'/'}><Icon style={{color: '#da0053'}} icon={['fab', 'instagram']}/></Link>
            <Link to={'/'}><Icon style={{color: '#4364aa'}} icon={['fab', 'facebook']}/></Link>
          </Socials>
          <ToggleMenu>
            <div
              role="button"
              onClick={handleClick}
              onKeyDown={handleClick}
              tabIndex={0}
            >
              <Icon icon="bars"/>
            </div>
          </ToggleMenu>
        </Container>
      </LogosWrapper>
      <NavWrapper isNavVisible={isNavVisible}>
        <Container>
          <ol>
            {navItems.map(({icon, text, url}, i) => <NavItem
              icon={icon}
              text={text}
              url={url}
              key={i}
            />)}
          </ol>
        </Container>
      </NavWrapper>
    </Wrapper>
  )
}

export default PageHeader