import React from "react"
import Layout from '../components/templates/Default'
import SEO from '../core/Seo'
import GlobalStyle from '../theme/GlobalStyle'
import theme from '../theme/theme'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components';
import Button from '../components/atoms/Button'

const H1 = styled.div`
  font-size: ${({theme}) => theme.fontSize.h1}rem;
`
const H2 = styled.div`
  font-size: ${({theme}) => theme.fontSize.h2}rem;
`
const H3 = styled.div`
  font-size: ${({theme}) => theme.fontSize.h3}rem;
`
const H4 = styled.div`
  font-size: ${({theme}) => theme.fontSize.h4}rem;
`
const H5 = styled.div`
  font-size: ${({theme}) => theme.fontSize.h5}rem;
`
const H6 = styled.div`
  font-size: ${({theme}) => theme.fontSize.h6}rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <H1>AAAsss</H1>
      <H2>AAAsss</H2>
      <H3>AAAsss</H3>
      <H4>AAAsss</H4>
      <H5>AAAsss</H5>
      <H6>AAAsss</H6>
      <Button variant="violet" color="white">Abecadło</Button>
    </ThemeProvider>
  </Layout>
)

export default IndexPage
