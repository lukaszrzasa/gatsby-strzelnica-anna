import styled, { css } from 'styled-components'

//
//    Responsive headings
//    when using H1 its:
//    - desktop: h1 size
//    - smallDesktop: h2 size
//    - mobile: h3 size
//
///////////////////////////////////////////////////////////////

//
//    Helpers
//
//////////////////////

const h1 = css`
  font-size: ${({theme}) => theme.fontSize.h1}rem;
`;

const h2 = css`
  font-size: ${({theme}) => theme.fontSize.h2}rem;
`;

const h3 = css`
  font-size: ${({theme}) => theme.fontSize.h3}rem;
`;

const h4 = css`
  font-size: ${({theme}) => theme.fontSize.h4}rem;
`;

const h5 = css`
  font-size: ${({theme}) => theme.fontSize.h5}rem;
`;

const h6 = css`
  font-size: ${({theme}) => theme.fontSize.h6}rem;
`;

//
//    Headings
//
//////////////////////

export const H1 = styled.h1`
  ${h1}
  ${({theme}) => theme.mediaQuery.smallDesktop} {
    ${h2}
  }
  ${({theme}) => theme.mediaQuery.mobile} {
    ${h3}
  }
`;

export const H2 = styled.h2`
  ${h2}
  ${({theme}) => theme.mediaQuery.smallDesktop} {
    ${h3}
  }
  ${({theme}) => theme.mediaQuery.mobile} {
    ${h4}
  }
`;

export const H3 = styled.h3`
  ${h3}
  ${({theme}) => theme.mediaQuery.smallDesktop} {
    ${h4}
  }
  ${({theme}) => theme.mediaQuery.mobile} {
    ${h4}
  }
`;

export const H4 = styled.h4`
  ${h4}
  ${({theme}) => theme.mediaQuery.smallDesktop} {
    ${h5}
  }
  ${({theme}) => theme.mediaQuery.mobile} {
    ${h6}
  }
`;

export const H5 = styled.h5`
  ${h5}
  ${({theme}) => theme.mediaQuery.mobile} {
    ${h6}
  }
`;

export const H6 = styled.h6`
  ${h6}
`;