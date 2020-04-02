import React from "react"
import PropTypes from "prop-types"
import PageHeader from './includes/PageHeader'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme/theme'
import styled from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle'
import { registerIcons } from '../../core/registerIcons'
import PageFooter from './includes/PageFooter'
import PageHeaderImage from '../molecules/PageHeaderImage'
import { Provider } from 'react-redux'
import { store } from '../../store/rootReducer'

registerIcons();

const Main = styled.main`
  
`;


const Layout = ({ children, headerImage }) => {

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <PageHeader />
        {headerImage && <PageHeaderImage image={headerImage}/>}
        <Main>{children}</Main>
        <PageFooter />
      </Provider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerImage: PropTypes.object,
}

export default Layout
