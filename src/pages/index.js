import React from "react"
import Default from '../components/templates/Default'
import SEO from '../core/Seo'
import Button from '../components/atoms/Button'
import Container from '../components/atoms/Container'
import { Heading, HeadingSection } from '../components/atoms/Heading'
import Paragraph from '../components/atoms/Paragraph'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components';
import SkewSection from '../components/molecules/SkewSection'
import { ColorBlock } from '../components/atoms/Color'
import { getStars } from '../components/organisms/TrainingOfferItem'
import Image from '../components/atoms/Image'

const SectionWelcome = styled(Container)`
  display: flex;
  padding-top: 3rem;
  > div {
    width: 50%;
    text-align: center;
  }
  ${({theme}) => theme.mediaQuery.mobile} {
    > div {
      width: 100%;
    }
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
const TrainingWrapper = styled.div`
  display: flex;
  > div {
    width: 50%;
  }
  ${({theme}) => theme.mediaQuery.mobile} {
    width: 100%;
  }
`;

const SectionTraining = styled(Container)`
  text-align: center;
`;

const SectionEvent = styled(Container)`
  text-align: center;
`;

const SectionContact = styled(Container)`
  text-align: center;
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

const sectionPricing = (pricingDesc, photo1, photo2) => (<SkewSection>
  <SectionPricing>
    <HeadingSection>Cennik</HeadingSection>
    <Paragraph>{pricingDesc}</Paragraph>
    <PricingGallery>
      {photo1 && <Image fluid={photo1.fluid}/>}
      {photo2 && <Image fluid={photo2.fluid}/>}
    </PricingGallery>
    <Link to="/cennik">
      <Button variant="green" color="white">Zapoznaj się z ofertą</Button>
    </Link>
  </SectionPricing>
</SkewSection>);

const sectionTraining = (trainingDesc) => (<SectionTraining>
  <HeadingSection>Szkolenia</HeadingSection>
  <Paragraph>
    {trainingDesc}
  </Paragraph>
  <TrainingWrapper>
    <div>
      <ColorBlock color="violet">{getStars(0.5)}</ColorBlock>
      <Heading>Szkolenie podstawowe</Heading>
      <Paragraph>Dla osób, które nie miały styczności z bronią, bądź kontakt ten był minimalny</Paragraph>
    </div>
    <div>
      <ColorBlock color="orange">{getStars(3)}</ColorBlock>
      <Heading>Specjalistyczne szkolenie strzeleckie, poziomy I - III</Heading>
      <Paragraph>Dla osób posiadających podstawową wiedzę z zakresu strzelectwa</Paragraph>
    </div>
  </TrainingWrapper>
  <Link to="/szkolenia">
    <Button variant="orange" color="white">Poznaj szczegóły</Button>
  </Link>
</SectionTraining>);

const sectionEvent = (shootingEventDesc, photo1, photo2) => (<SkewSection>
  <SectionEvent>
    <HeadingSection>10 Strzałów</HeadingSection>
    <Paragraph>{shootingEventDesc}</Paragraph>
    <PricingGallery>
      {photo1 && <Image fluid={photo1.fluid}/>}
      {photo2 && <Image fluid={photo2.fluid}/>}
    </PricingGallery>
    <Link to="/10-strzalow">
      <Button variant="violet" color="white">Dowiedz się więcej</Button>
    </Link>
  </SectionEvent>
</SkewSection>);

const sectionContact = (contactDesc) => (<SectionContact>
  <HeadingSection>Kontakt</HeadingSection>
  <Paragraph>{contactDesc}</Paragraph>
  {/*TODO: contact info*/}
  <Link to="/kontakt">
    <Button variant="orange" color="white">Przejdź do zakłądki "kontakt"</Button>
  </Link>
</SectionContact>);



const IndexPage = ({data}) => {
  const { index } = data;
  return(
    <Default>
      <SEO { ...index.seo }/>
      {sectionWelcome}
      {index && <>
        {sectionPricing(index.pricingDesc, index.pricingPhoto1, index.pricingPhoto1)}
        {sectionTraining(index.trainingDesc)}
        {sectionEvent(index.shootingEventDesc)}
        {sectionContact(index.contactDesc)}
      </>}
    </Default>
  );
}

export const query = graphql`
  fragment fluid on DatoCmsFluid {
    src
    srcSet
    tracedSVG
  }
  
  query {
    index: datoCmsPageIndex {
      pricingDesc
      pricingPhoto1 {
        fluid {
          ...fluid
        }
      }
      pricingPhoto2 {
        fluid {
          ...fluid
        }
      }
      trainingDesc
      shootingEventDesc
      shootingEventPhoto1 {
        fluid {
          ...fluid
        }
      }
      shootingEventPhoto2 {
        fluid {
          ...fluid
        }
      }
      contactDesc
      seo {
        ...Seo
      }
    }
  }
`;

export default IndexPage
