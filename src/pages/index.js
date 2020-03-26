import React from "react"
import Layout from '../components/templates/Default'
import SEO from '../core/Seo'
import Button from '../components/atoms/Button'
import Container from '../components/atoms/Container'
import { Heading, HeadingSection } from '../components/atoms/Heading'
import Paragraph from '../components/atoms/Paragraph'
import { Link } from 'gatsby'
import styled from 'styled-components';
import SkewSection from '../components/molecules/SkewSection'

const SectionWelcome = styled(Container)`
  display: flex;
  padding-top: 3rem;
  > div {
    width: 50%;
    text-align: center;
  }
  ${({theme}) => theme.mediaQuery.mobile} {
    width: 100%;
  }
`;

const MobileHidden = styled.div`
  display: block;
  ${({theme}) => theme.mediaQuery.mobile} {
    display: none;
  }
`;

const SectionPricing = styled(Container)`
  text-align: center;
`;

const PricingGallery = styled.div`
  display: flex;
  > div {
    width: 33.33333%;
    ${({theme}) => theme.mediaQuery.mobile} {
      width: 100%;
    }
  }
`;


const sectionWelcome = (<SectionWelcome>
  <div>
    <HeadingSection>Rezerwacje</HeadingSection>
    <Paragraph>Nie czekaj, zarezerwuj strzelnicę już dziś!</Paragraph>
    <Link to="/rezerwacje">
      <Button variant="violet" color="white">Zobacz wolne terminy</Button>
    </Link>
  </div>
  <MobileHidden>
    <HeadingSection>Wejdź na naszego facebooka</HeadingSection>
    <Paragraph>Aby nie ominęło Cię żadne wydarzenie!</Paragraph>
    <Link to="/">
      <Button variant="blue" color="white">Odwiedź stronę na FB</Button>
    </Link>
  </MobileHidden>
</SectionWelcome>);

const sectionPricing = (<SkewSection>
  <SectionPricing>
    <HeadingSection>Cennik</HeadingSection>
    <Paragraph>Zainteresowany naszą ofertą? Sprawdź aktualny cennik broni i amunicji, a także zobacz jakie pakiety przygotowaliśmy dla Ciebie!</Paragraph>
    <PricingGallery>
      {/*TODO: tu będą 3 zdjęcia*/}
    </PricingGallery>
    <Link to="/cennik">
      <Button variant="green" color="white">Zapoznaj się z ofertą</Button>
    </Link>
  </SectionPricing>
</SkewSection>);

const IndexPage = () => (
  <Layout>
    <SEO title="Strona Główna" />
    {sectionWelcome}
    {sectionPricing}
  </Layout>
)

export default IndexPage
